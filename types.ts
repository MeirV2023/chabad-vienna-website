export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
}

export interface MenuCategory {
  categoryTitle: string;
  items: MenuItem[];
}

export interface Menu {
  type: string;
  categories: MenuCategory[];
}

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
  menus: Menu[];
  about: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Shabbat {
  id: string;
  parsha: string;
  dates: string;
  begins: string;
  ends: string;
}

export interface TicketOption {
  id: string;
  label: string;
  price: number;
}

export interface ShabbatService {
  title: string;
  day: 'Friday' | 'Saturday';
  getDatePart: (dates: string) => string;
  options: TicketOption[];
}