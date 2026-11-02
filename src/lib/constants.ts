export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'subscriptions'
  | 'how-it-works'
  | 'download-app'
  | 'download'
  | 'privacy-policy'
  | 'terms-and-conditions';

export const APP_DOWNLOAD_URL = 'https://deskpro.co.in/downloads/DeskPro.apk';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=deskpro.app';

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'subscriptions', label: 'Subscriptions' },
  { id: 'how-it-works', label: 'How It Works' },
];

export const COMPANY = {
  name: 'DeskPro',
  tagline: 'Smart Service & Product Management',
  parent: 'MaytasTechSolutions',
  email: 'deskpro.admin@gmail.con',
  phone: '+91 9494348719',
};
