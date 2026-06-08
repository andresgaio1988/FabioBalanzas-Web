import bordigoniLogo from '../assets/clientes/bordigoni.png';
import concreteLogo from '../assets/clientes/concrete.png';
import crLogo from '../assets/clientes/cr-construcciones.png';
import hormacoLogo from '../assets/clientes/hormaco.png';
import hormatLogo from '../assets/clientes/hormat.png';
import pavisurLogo from '../assets/clientes/pavisur.png';
import pelqueLogo from '../assets/clientes/pelque.png';
import redimatLogo from '../assets/clientes/redimat.jpg';
import ruralCastelliLogo from '../assets/clientes/sociedad-rural-castelli.jpg';
import ruralLezamaLogo from '../assets/clientes/sociedad-rural-lezama.jpg';

export type LogoSurface = 'light' | 'muted' | 'dark';

export type ClientEntry = {
  name: string;
  logo: string;
  alt: string;
  /** Fondo del contenedor cuando el logo es claro o blanco. */
  surface?: LogoSurface;
};

/** Clientes destacados — logos importados desde assets para deploy fiable. */
export const featuredClients: ClientEntry[] = [
  { name: 'Hormaco', logo: hormacoLogo, alt: 'Hormaco' },
  { name: 'Pavisur', logo: pavisurLogo, alt: 'Pavisur S.A.' },
  { name: 'Concrete', logo: concreteLogo, alt: 'Concrete' },
  { name: 'Redimat', logo: redimatLogo, alt: 'Redimat' },
  { name: 'CR Construcciones', logo: crLogo, alt: 'CR Construcciones' },
  { name: 'Hormat-Seda S.A.', logo: hormatLogo, alt: 'Hormat-Seda S.A.', surface: 'dark' },
  { name: 'Bordigoni Construcciones', logo: bordigoniLogo, alt: 'Bordigoni y Cía.' },
  { name: 'Pelque S.A.', logo: pelqueLogo, alt: 'Pelque S.A.', surface: 'dark' },
  {
    name: 'Sociedad Rural de Castelli',
    logo: ruralCastelliLogo,
    alt: 'Sociedad Rural de Castelli',
  },
  {
    name: 'Sociedad Rural de Lezama',
    logo: ruralLezamaLogo,
    alt: 'Sociedad Rural de Lezama',
  },
];
