import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { onRequest } from 'firebase-functions/v2/https';
import nodemailer from 'nodemailer';

initializeApp();

const allowedOrigins = [
  'https://www.fabiobalanzas.com.ar',
  'https://fabiobalanzas.com.ar',
  'https://fabio-balanzas.web.app',
  'https://fabio-balanzas.firebaseapp.com',
  'http://localhost:5173',
];

type ContactBody = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
  website?: string;
};

function normalize(value: unknown, maxLen: number): string {
  return String(value ?? '')
    .trim()
    .slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendNotificationEmail(payload: {
  name: string;
  company: string;
  email: string;
  message: string;
  requestId: string;
}) {
  const to = process.env.CONTACT_NOTIFY_EMAIL?.trim() ?? '';
  const host = process.env.SMTP_HOST?.trim() ?? '';
  const user = process.env.SMTP_USER?.trim() ?? '';
  const pass = process.env.SMTP_PASS?.trim() ?? '';
  const portRaw = process.env.SMTP_PORT?.trim() ?? '587';

  if (!to || !host || !user || !pass) {
    return;
  }

  const port = Number.parseInt(portRaw, 10) || 587;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const text = [
    'Nueva solicitud de demo — sitio corporativo',
    '',
    `Nombre: ${payload.name}`,
    `Empresa: ${payload.company}`,
    `Email: ${payload.email}`,
    '',
    'Mensaje:',
    payload.message,
    '',
    `ID: ${payload.requestId}`,
  ].join('\n');

  await transporter.sendMail({
    from: `"${process.env.CONTACT_FROM_NAME?.trim() || 'Fabio Balanzas — Ventas'}" <${process.env.CONTACT_FROM_EMAIL?.trim() || to}>`,
    to,
    replyTo: payload.email,
    subject: `Demo PesaLink — ${payload.company}`,
    text,
  });
}

export const submitDemoRequest = onRequest(
  {
    cors: allowedOrigins,
    region: 'southamerica-east1',
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ ok: false, error: 'Método no permitido' });
      return;
    }

    const body = (req.body ?? {}) as ContactBody;

    if (body.website?.trim()) {
      res.status(400).json({ ok: false, error: 'Solicitud rechazada' });
      return;
    }

    const name = normalize(body.name, 120);
    const company = normalize(body.company, 160);
    const email = normalize(body.email, 160).toLowerCase();
    const message = normalize(body.message, 4000);

    if (!name || !company || !email || !message) {
      res.status(400).json({ ok: false, error: 'Completá todos los campos obligatorios.' });
      return;
    }

    if (!isValidEmail(email)) {
      res.status(400).json({ ok: false, error: 'El email no es válido.' });
      return;
    }

    try {
      const docRef = await getFirestore().collection('demo_requests').add({
        name,
        company,
        email,
        message,
        source: 'corporate_web',
        status: 'new',
        createdAt: FieldValue.serverTimestamp(),
      });

      try {
        await sendNotificationEmail({
          name,
          company,
          email,
          message,
          requestId: docRef.id,
        });
      } catch (mailError) {
        console.error('Email notify failed', mailError);
      }

      res.status(200).json({ ok: true, id: docRef.id });
    } catch (error) {
      console.error('submitDemoRequest failed', error);
      res.status(500).json({ ok: false, error: 'No se pudo guardar la solicitud. Intentá más tarde.' });
    }
  },
);
