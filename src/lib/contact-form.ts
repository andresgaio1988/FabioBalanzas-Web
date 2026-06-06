export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type SubmitResponse = {
  ok?: boolean;
  error?: string;
};

const endpoint =
  import.meta.env.VITE_CONTACT_SUBMIT_URL ??
  'https://portal.fabiobalanzas.com.ar/api/demo-request';

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: data.name,
      company: data.company,
      email: data.email,
      message: data.message,
      website: '',
    }),
  });

  let payload: SubmitResponse = {};
  try {
    payload = (await response.json()) as SubmitResponse;
  } catch {
    payload = {};
  }

  if (!response.ok || !payload.ok) {
    throw new Error(payload.error ?? 'No se pudo enviar la solicitud. Intentá más tarde.');
  }
}
