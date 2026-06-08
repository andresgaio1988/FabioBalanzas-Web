export type ClientLogo = {
  src: string;
  alt: string;
};

export type ClientEntry = {
  /** Etiqueta visible bajo el logo (opcional si el logo ya incluye marca). */
  name: string;
  logos: ClientLogo[];
};

const clientesBase = `${import.meta.env.BASE_URL}clientes/`;

/** Clientes destacados — logos desde sitios oficiales o CARBAP (sociedades rurales). */
export const featuredClients: ClientEntry[] = [
  {
    name: 'Hormaco',
    logos: [{ src: `${clientesBase}hormaco.png`, alt: 'Hormaco' }],
  },
  {
    name: 'Pavisur',
    logos: [{ src: `${clientesBase}pavisur.svg`, alt: 'Pavisur S.A.' }],
  },
  {
    name: 'Concrete · Redimat · CR Construcciones',
    logos: [
      { src: `${clientesBase}concrete.png`, alt: 'Concrete' },
      { src: `${clientesBase}redimat.jpg`, alt: 'Redimat' },
      { src: `${clientesBase}cr-construcciones.svg`, alt: 'CR Construcciones' },
    ],
  },
  {
    name: 'Hormat-Seda S.A.',
    logos: [{ src: `${clientesBase}hormat.png`, alt: 'Hormat-Seda S.A.' }],
  },
  {
    name: 'Bordigoni Construcciones',
    logos: [{ src: `${clientesBase}bordigoni.png`, alt: 'Bordigoni y Cía.' }],
  },
  {
    name: 'Pelque S.A.',
    logos: [{ src: `${clientesBase}pelque.png`, alt: 'Pelque S.A.' }],
  },
  {
    name: 'Arquing Vial',
    logos: [{ src: `${clientesBase}arquing-vial.svg`, alt: 'Arquing Vial Construye' }],
  },
  {
    name: 'Sociedad Rural de Castelli',
    logos: [{ src: `${clientesBase}sociedad-rural-castelli.jpg`, alt: 'Sociedad Rural de Castelli' }],
  },
  {
    name: 'Sociedad Rural de Lezama',
    logos: [{ src: `${clientesBase}sociedad-rural-lezama.jpg`, alt: 'Sociedad Rural de Lezama' }],
  },
];
