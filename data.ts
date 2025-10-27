import type { Restaurant, GalleryImage, Shabbat, ShabbatService } from './types';

// EDIT THIS FILE TO MANAGE MENU CONTENT
// This file acts as a central database for the website's content.
// To change menu items, prices, descriptions for "Main dishes menu", "Drinks menu", or "Desserts menu",
// modify the data inside the RESTAURANTS_DATA array below.
// To change the gallery images, modify the INTERIOR_GALLERY_IMAGES and MENU_GALLERY_IMAGES arrays.

export const INTERIOR_GALLERY_IMAGES: GalleryImage[] = [
  { id: 'i1', src: 'https://i.imgur.com/7i5Be5w.jpeg', alt: 'A restaurant interior' },
  { id: 'i2', src: 'https://i.ibb.co/N6KmvXZY/DSF7164.jpg', alt: 'Elegant dining room' },
  { id: 'i3', src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop', alt: 'Wine glasses on a table' },
];

export const MENU_GALLERY_IMAGES: GalleryImage[] = [
  { id: 'm1', src: 'https://lh3.googleusercontent.com/TtXJPYePTkmMxQ6bdYt9tLE5_7DYomAUscQnn2fdIn7jwGPI4yiLr3FM3YHO8z6FFuovbrM3kzzdyuFYjabLB63EuGvDRmiz7jM7nNlC7Q=s2500-rw', alt: 'Plated main dish' },
  { id: 'm2', src: 'https://lh3.googleusercontent.com/L4HgUX-TllP2EqtDEs4_dCw2Ldi7MoOqjlcoFZLQQwA6uwXqB9rkw36RytjPruB2brBAufoeL-HGnkUO3-iXs_sNQmpzE29FX25pMjXWuG4=s2500-rw', alt: 'Artisanal cocktails' },
  { id: 'm3', src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop', alt: 'A plated dessert' },
  { id: 'm4', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop', alt: 'A beautiful main dish' },
  { id: 'm5', src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1974&auto=format&fit=crop', alt: 'A slice of cake' },
  { id: 'm6', src: 'https://images.unsplash.com/photo-1571115177228-46146941b63c?q=80&w=1974&auto=format&fit=crop', alt: 'Assorted desserts' },
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: '1',
    slug: 'main-dishes',
    name: 'Main dishes menu',
    heroImage: 'https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQz-E74JErGGi/GrNY73zTIxBGiKuyUWcVPsI5uXujIbvi/ItQB1Bl9p6LzdBnXPUjo-Q.jpg',
    address: 'Tegetthoffstraße 3a, 1010 Wien',
    phone: '+43 660 6962277',
    email: 'help@chabad-opera.com',
    hours: [
      { day: 'See restaurant for details', time: '' },
    ],
    about: 'Explore our selection of exquisite main courses, featuring the finest cuts of meat and freshest ingredients, prepared to perfection.',
    menus: [
      {
        type: 'Main Dishes',
        categories: [
          {
            categoryTitle: 'Appetizers',
            items: [
              { name: 'Tuna Tartare', description: 'Avocado, Crispy Rice, Soy-Ginger Vinaigrette', price: 18 },
              { name: 'Wagyu Beef Carpaccio', description: 'Truffle Aioli, Arugula, Shaved Parmesan', price: 33 },
            ],
          },
          {
            categoryTitle: 'Steaks',
            items: [
              { name: 'Filet Mignon', description: '8 oz. Center Cut', price: 65 },
              { name: 'Ribeye', description: '16 oz. Prime, Bone-In', price: 78 },
              { name: 'Porterhouse for Two', description: '42 oz. Dry-Aged', price: 150 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'drinks',
    name: 'Drinks menu',
    heroImage: 'https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQ4u3hi67g1zS/bCVfC80XdG_q5qE6kYJuvaSbRQUjGgwO/s3QA9x16ghdVyslm7kgCHQ.jpg',
    address: 'Tegetthoffstraße 3a, 1010 Wien',
    phone: '+43 660 6962277',
    email: 'help@chabad-opera.com',
    hours: [
      { day: 'See restaurant for details', time: '' },
    ],
    about: 'Discover our curated collection of fine wines, signature cocktails, and refreshing beverages to complement your dining experience.',
    menus: [
      {
        type: 'Drinks',
        categories: [
          {
            categoryTitle: 'Specialty House Cocktails',
            items: [
              { name: 'Caribe', description: 'Rum, Coconut Cream, Pineapple, Lime, Simple Syrup', price: 25 },
              { name: 'Tropical Sunset', description: 'Rum, Luxardo Aperitivo, Lemon, Pineapple, Thyme Infused Syrup', price: 25 },
              { name: 'Negroni Americano', description: 'Bombay Sapphire, Luxardo Aperitivo, Rosemary, Sweet Vermouth', price: 25 },
            ],
          },
          {
            categoryTitle: 'Bar Bites',
            items: [
                { name: 'Truffle Fries', description: 'Parmesan, Parsley, Truffle Aioli', price: 15 },
                { name: 'Slider Trio', description: 'Wagyu Beef, Cheddar, Secret Sauce', price: 22 },
            ]
          }
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'desserts',
    name: 'Desserts menu',
    heroImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop',
    address: 'Tegetthoffstraße 3a, 1010 Wien',
    phone: '(212) 747-0300',
    email: 'info@rc-hospitality.com',
    hours: [
      { day: 'See restaurant for details', time: '' },
    ],
    about: 'Indulge in our decadent desserts, from classic confections to innovative sweet creations, all crafted to provide the perfect ending to your meal.',
    menus: [
      {
        type: 'Desserts',
        categories: [
          {
            categoryTitle: 'Sweets',
            items: [
                { name: 'Chocolate Lava Cake', description: 'Vanilla Bean Ice Cream, Raspberry Coulis', price: 18 },
                { name: 'New York Cheesecake', description: 'Strawberry Compote, Graham Cracker Crust', price: 16 },
                { name: 'Crème brûlée', description: 'Classic vanilla bean custard with a caramelized sugar crust', price: 17 },
                { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder', price: 18 },
            ]
          }
        ]
      }
    ],
  }
];

export const SHABBAT_DATA: Shabbat[] = [
  {
    id: '1',
    parsha: 'Parashat Vayera',
    dates: '07-08/11/2025',
    begins: '16:10',
    ends: '17:14',
  },
  {
    id: '2',
    parsha: 'Parashat Chayei Sara',
    dates: '14-15/11/2025',
    begins: '16:01',
    ends: '17:06',
  },
  {
    id: '3',
    parsha: 'Parashat Toldot',
    dates: '21-22/11/2025',
    begins: '15:54',
    ends: '17:00',
  },
   {
    id: '4',
    parsha: 'Parashat Vayetzei',
    dates: '28-29/11/2025',
    begins: '15:48',
    ends: '16:57',
  },
  {
    id: '5',
    parsha: 'Parashat Vayishlach',
    dates: '05-06/12/2025',
    begins: '15:46',
    ends: '16:56',
  },
  {
    id: '6',
    parsha: 'Parashat Vayeshev',
    dates: '12-13/12/2025',
    begins: '15:46',
    ends: '16:58',
  },
    {
    id: '7',
    parsha: 'Parashat Miketz',
    dates: '19-20/12/2025',
    begins: '15:48',
    ends: '17:02',
  },
  {
    id: '8',
    parsha: 'Parashat Vayigash',
    dates: '26-27/12/2025',
    begins: '15:53',
    ends: '17:07',
  },
    {
    id: '9',
    parsha: 'Parashat Vayechi',
    dates: '02-03/01/2026',
    begins: '16:00',
    ends: '17:14',
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
        title: 'Friday night',
        day: 'Friday',
        getDatePart: (dates) => parseDateParts(dates).friday,
        options: [
            { id: 'fn_adult', label: 'Donation to cover the costs - Adult', price: 38.00 },
            { id: 'fn_kids', label: 'Donation to cover the costs - Kids', price: 30.00 },
            { id: 'fn_sponsor', label: 'Sponsor', price: 80.00 },
            { id: 'fn_free', label: "If you Don't want to donate to cover the costs, click here to sign up for free - No charge", price: 0 },
        ]
    },
    {
        title: 'Shabbat day',
        day: 'Saturday',
        getDatePart: (dates) => parseDateParts(dates).saturday,
        options: [
            { id: 'sd_adult', label: 'Donation to cover the costs - Adult', price: 35.00 },
            { id: 'sd_kids', label: 'Donation to cover the costs - Kids', price: 28.00 },
            { id: 'sd_sponsor', label: 'Sponsor', price: 80.00 },
            { id: 'sd_free', label: "If you Don't want to donate to cover the costs, click here to sign up for free - No charge", price: 0 },
        ]
    }
];
