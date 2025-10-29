import type { Restaurant, GalleryImage, Shabbat, ShabbatService } from './types';

// EDIT THIS FILE TO MANAGE MENU CONTENT
// This file acts as a central database for the website's content.
// To change menu items, prices, descriptions for "Main dishes menu", "Drinks menu", or "Desserts menu",
// modify the data inside the RESTAURANTS_DATA array below.
// To change the gallery images, modify the INTERIOR_GALLERY_IMAGES and MENU_GALLERY_IMAGES arrays.

export const INTERIOR_GALLERY_IMAGES: GalleryImage[] = [
  { id: 'i1', src: 'https://i.imgur.com/7i5Be5w.jpeg', alt: 'A restaurant interior' },
  { id: 'i2', src: 'https://i.ibb.co/N6KmvXZY/DSF7164.jpg', alt: 'Elegant dining room' },
  { id: 'i3', src: 'https://i.ibb.co/6RS7LbXx/DSC0372.jpg', alt: 'Wine glasses on a table' },
  { id: 'i4', src: 'https://i.ibb.co/M5S9XVTc/DSC0479.jpg', alt: 'Wine glasses on a table' },
];

export const MENU_GALLERY_IMAGES: GalleryImage[] = [
  { id: 'm1', src: 'https://lh3.googleusercontent.com/TtXJPYePTkmMxQ6bdYt9tLE5_7DYomAUscQnn2fdIn7jwGPI4yiLr3FM3YHO8z6FFuovbrM3kzzdyuFYjabLB63EuGvDRmiz7jM7nNlC7Q=s2500-rw', alt: 'Plated main dish' },
  { id: 'm2', src: 'https://lh3.googleusercontent.com/L4HgUX-TllP2EqtDEs4_dCw2Ldi7MoOqjlcoFZLQQwA6uwXqB9rkw36RytjPruB2brBAufoeL-HGnkUO3-iXs_sNQmpzE29FX25pMjXWuG4=s2500-rw', alt: 'Artisanal cocktails' },
  { id: 'm3', src: 'https://i.ibb.co/r22B3RN7/DSC0444.jpg', alt: 'A plated dessert' },
  { id: 'm4', src: 'https://i.ibb.co/8L9T3hk5/DSC0396.jpg', alt: 'A beautiful main dish' },
  { id: 'm5', src: 'https://i.ibb.co/NdWQ3KZT/DSC0390.jpg', alt: 'A slice of cake' },
  { id: 'm6', src: 'https://i.ibb.co/q3CYPszY/JRCV-01-10-25-0034.jpg', alt: 'Assorted desserts' },
  { id: 'm7', src: 'https://i.ibb.co/0pShDvpn/JRCV-01-10-25-0008-1.jpg', alt: 'Assorted desserts' },
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: '1',
    slug: 'silver-shabbat-menu',
    name: 'Silver Shabbat Menu',
    heroImage: 'https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQz-E74JErGGi/GrNY73zTIxBGiKuyUWcVPsI5uXujIbvi/ItQB1Bl9p6LzdBnXPUjo-Q.jpg',
    address: 'Tegetthoffstraße 3a, 1010 Wien',
    phone: '+43 660 6962277',
    email: 'help@chabad-opera.com',
    hours: [
      { day: 'See restaurant for details', time: '' },
    ],
    about: 'Including soft drinks and wine for Kiddush.',
    menus: [
      {
        type: 'Silver Shabbat Menu',
        categories: [
          {
            categoryTitle: 'Salads',
            items: [
              { name: 'Cabbage salad' },
              { name: 'Georgian salad' },
              { name: 'Hummus with mushrooms' },
              { name: 'Potato salad' },
              { name: 'Carrot salad' },
              { name: 'Eggplant salad' },
              { name: 'Egg salad' },
              { name: 'Dibe salad' },
            ],
          },
          {
            categoryTitle: 'Fish',
            items: [
              { name: 'Salmon in tomato sauce' },
            ],
          },
          {
            categoryTitle: 'Main Courses',
            items: [
              { name: 'Chicken soup' },
              { name: 'Chicken breast with mashed potatoes' },
              { name: 'Austrian-style goulash in red wine sauce' },
            ],
          },
          {
            categoryTitle: 'Bread',
            items: [
              { name: 'Traditional Challa bread' },
            ],
          },
          {
            categoryTitle: 'Dessert',
            items: [
              { name: 'Homemade apple strudel' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'gold-shabbat-menu',
    name: 'Gold Shabbat Menu',
    heroImage: 'https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQ4u3hi67g1zS/bCVfC80XdG_q5qE6kYJuvaSbRQUjGgwO/s3QA9x16ghdVyslm7kgCHQ.jpg',
    address: 'Tegetthoffstraße 3a, 1010 Wien',
    phone: '+43 660 6962277',
    email: 'help@chabad-opera.com',
    hours: [
      { day: 'See restaurant for details', time: '' },
    ],
    about: 'Including one bottle of red wine and soft drinks',
    menus: [
      {
        type: 'Gold Shabbat Menu',
        categories: [
          {
            categoryTitle: 'Salads',
            items: [
              { name: 'Cabbage salad' },
              { name: 'Georgian salad' },
              { name: 'Hummus with mushrooms' },
              { name: 'Potato salad' },
              { name: 'Carrot salad' },
              { name: 'Eggplant salad' },
              { name: 'Egg salad' },
              { name: 'Dibe salad' },
              { name: 'Ukrainian “Shuba” layered salad with herring' },
              { name: 'Avocado salad' },
              { name: 'Herring with potatoes' },
              { name: 'Pickled vegetable platter' },
              { name: 'Fresh vegetable platter' },
              { name: 'Seasonal fruit platter' },
            ],
          },
          {
            categoryTitle: 'Appetizer',
            items: [
              { name: 'Salmon in tomato sauce with vegetables' },
            ],
          },
          {
            categoryTitle: 'Main Courses',
            items: [
              { name: 'Chicken soup' },
              { name: 'Chicken breast with mashed potatoes' },
              { name: 'Austrian-style goulash' },
              { name: 'Blini filled with chicken and mushrooms' },
              { name: 'Goulash with mashed potatoes' },
            ],
          },
          {
            categoryTitle: 'Dessert',
            items: [
              { name: 'Homemade apple strudel and fresh fruits' },
            ],
          },
        ],
      },
    ],
  },
];

export const SHABBAT_DATA: Shabbat[] = [
  {
    id: '1',
    parsha: 'Parashat Lech-Lecha',
    dates: '31.10.11.2025',
    begins: '16:26',
    ends: '17:29',
  },
  {
    id: '2',
    parsha: 'Parashat Vayera',
    dates: '07.11.2025',
    begins: '16:10',
    ends: '17:14',
  },
  {
    id: '3',
    parsha: 'Parashat Chayei Sara',
    dates: '14.11.2025',
    begins: '16:01',
    ends: '17:06',
  },
  {
    id: '4',
    parsha: 'Parashat Toldot',
    dates: '21.11.2025',
    begins: '15:54',
    ends: '17:00',
  },
  {
    id: '5',
    parsha: 'Parashat Vayetzei',
    dates: '28.11.2025',
    begins: '15:48',
    ends: '16:57',
  },
  {
    id: '6',
    parsha: 'Parashat Vayishlach',
    dates: '05.12.2025',
    begins: '15:46',
    ends: '16:56',
  },
  {
    id: '7',
    parsha: 'Parashat Miketz',
    dates: '19.12.2025',
    begins: '15:48',
    ends: '17:02',
  },
  {
    id: '8',
    parsha: 'Parashat Vayigash',
    dates: '26.12.2025',
    begins: '15:53',
    ends: '17:07',
  },
  {
    id: '9',
    parsha: 'Parashat Vayechi',
    dates: '02.01.2026',
    begins: '16:00',
    ends: '17:14',
  },
  {
    id: '10',
    parsha: 'Parashat Shemot',
    dates: '09.01.2026',
    begins: '16:09',
    ends: '17:22',
  },
];


const parseDateParts = (dates: string): { friday: string; saturday: string } => {
    const parts = dates.split('/');
    if (parts.length < 2) return { friday: dates, saturday: dates };
    const monthAndYear = parts.slice(1).join('/');
    const days = parts[0].split('-');
    return {
        friday: `${days[0]}/${monthAndYear}`,
        saturday: `${days[1] || days[0]}/${monthAndYear}`
    };
};

export const SHABBAT_TICKET_OPTIONS: ShabbatService[] = [
    {
        title: 'Friday Evening Silver Shabbat Menu',
        day: 'Friday',
        getDatePart: (dates) => parseDateParts(dates).friday,
        options: [
            { id: 'silver_adult', label: 'Adult', price: 60.00 },
            { id: 'silver_kids', label: 'Kids (under 13)', price: 30.00 },
        ]
    },
    {
        title: 'Friday Evening Gold Shabbat Menu',
        day: 'Friday',
        getDatePart: (dates) => parseDateParts(dates).friday,
        options: [
            { id: 'gold_adult', label: 'Adult', price: 95.00 },
            { id: 'gold_kids', label: 'Kids (under 13)', price: 45.00 },
        ]
    }
];