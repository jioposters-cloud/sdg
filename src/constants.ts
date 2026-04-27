export interface AssetInfo {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  imageUrl: string;
  pillarId: string;
  // Contact Details from Sheet
  mobile?: string;
  whatsapp?: string;
  website?: string;
  location?: string;
  category?: string;
}

export const ASSETS: AssetInfo[] = [
  {
    id: '1',
    title: 'Status Ring - Elight',
    subtitle: 'Online Shop & Printing',
    description: 'Exclusive online platform shop for home decor, table tops, posters, and custom gifts.',
    imageUrl: 'https://i.postimg.cc/nLqFSBtG/image.png',
    pillarId: '01',
    mobile: '09033661813',
    whatsapp: '09033661813',
    website: 'https://mydeesa.statusring.in',
    location: '14, 15 Hardik Complex, Tin Hanuman Mandir Road, Deesa',
    category: 'Online Shop'
  },
  {
    id: '2',
    title: 'Elight Electric',
    subtitle: 'Electrician',
    description: 'Professional electrician services in Deesa. Expert in home and commercial electrical work.',
    imageUrl: 'https://i.postimg.cc/brVSYkrC/image.png',
    pillarId: '02',
    mobile: '09979354060',
    website: 'https://wa.link/e6l3p5',
    category: 'Electronics'
  },
  {
    id: '3',
    title: 'Dr. Ankit M. Patel',
    subtitle: 'Dentist - Doctors',
    description: 'Expert dental care services located in Deesa. Specializing in modern dentistry.',
    imageUrl: 'https://i.postimg.cc/MHSC1TXb/image.png',
    pillarId: '03',
    mobile: '09033661813',
    whatsapp: '09033661813',
    website: 'https://drankitpatel.com',
    location: 'andir road, Deesa',
    category: 'Doctors'
  },
  {
    id: '4',
    title: 'Patel Sales',
    subtitle: 'Electronics & Electrics',
    description: 'Serving Deesa with quality electronics and electrical appliances for over a decade.',
    imageUrl: 'https://i.postimg.cc/k4G6jLdK/image.png',
    pillarId: '04',
    mobile: '02744221110',
    website: 'https://saiimpex.my.canva.site/mydeesa',
    category: 'Electronics'
  },
  {
    id: '5',
    title: 'Welcome Electronics',
    subtitle: 'TV, Fridge & AC',
    description: 'Deesa\'s premier destination for home entertainment and cooling systems.',
    imageUrl: 'https://i.postimg.cc/sXb7ndhB/image.png',
    pillarId: '05',
    mobile: '02744221125',
    category: 'Electronics'
  },
  {
    id: '6',
    title: 'Parasmani Electronics',
    subtitle: 'Electronics & Electrics',
    description: 'Providing top-tier electronic solutions and high-quality electrical components.',
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop',
    pillarId: '06',
    mobile: '02744220481',
    category: 'Electronics'
  },
  {
    id: '7',
    title: 'Vimal Sales',
    subtitle: 'Electronics & Electrics',
    description: 'Trusted retailer for electrical hardware and consumer electronic devices.',
    imageUrl: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop',
    pillarId: '07',
    mobile: '02744220333',
    category: 'Electronics'
  },
  {
    id: '8',
    title: 'Vandana Electric',
    subtitle: 'Electronics & Electrics',
    description: 'Specializing in residential wiring, electrical supplies, and lighting solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    pillarId: '08',
    mobile: '02744224361',
    category: 'Electronics'
  },
  {
    id: '9',
    title: 'Sarvoday Electronics',
    subtitle: 'TV, Fridge & AC',
    description: 'Expert sales and service for all major appliance brands in Deesa.',
    imageUrl: 'https://i.postimg.cc/k4G6jLdK/image.png',
    pillarId: '09',
    mobile: '09825128514',
    category: 'Electronics'
  },
  {
    id: '10',
    title: 'Shree Jalaram Appliances',
    subtitle: 'TV, Fridge & AC',
    description: 'Top-quality kitchen and home appliances with reliable after-sales service.',
    imageUrl: 'https://i.postimg.cc/qvt17822/image.png',
    pillarId: '10',
    mobile: '02744222226',
    category: 'Electronics'
  },
  {
    id: '11',
    title: 'Super Electric',
    subtitle: 'Machinery & Tools',
    description: 'Industrial grade electrical machinery and precision power tools for professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    pillarId: '11',
    mobile: '09925652233',
    category: 'Electronics'
  },
  {
    id: '12',
    title: 'Shree Ganesh Electricals',
    subtitle: 'Electronics & Electrics',
    description: 'A wide range of high-quality electrical components and wiring solutions.',
    imageUrl: '',
    pillarId: '12',
    mobile: '09228150365',
    category: 'Electronics'
  },
  {
    id: '13',
    title: 'Jay bhairva ELECTRICALS',
    subtitle: 'Electronics & Electrics',
    description: 'Modern lighting fixtures and energy-efficient power management systems.',
    imageUrl: '',
    pillarId: '13',
    mobile: '09426175593',
    category: 'Electronics'
  },
  {
    id: '14',
    title: 'Savera Electric Agency',
    subtitle: 'Electronics & Electrics',
    description: 'Trusted distributor of leading electrical brands and lighting solutions.',
    imageUrl: 'https://i.postimg.cc/0jXQX0P8/image.png',
    pillarId: '14',
    mobile: '02744221892',
    category: 'Electronics'
  },
  {
    id: '15',
    title: 'Jyoti Electrical',
    subtitle: 'Electronics & Electrics',
    description: 'Specialized electrical services and supply for household and commercial needs.',
    imageUrl: 'https://i.postimg.cc/tCc2Lh1B/image.png',
    pillarId: '15',
    mobile: '9898702414',
    category: 'Electronics'
  },
  {
    id: '16',
    title: 'ELECTRONICS WORLD',
    subtitle: 'Electronics & Electrics',
    description: 'The ultimate destination for the latest gadgets and consumer technology.',
    imageUrl: '',
    pillarId: '16',
    mobile: '8401233233',
    category: 'Electronics'
  },
  {
    id: '17',
    title: 'Rental / ભાડે આપવું',
    subtitle: 'Real Estate Solutions',
    description: 'Looking for a house, land, or shop? Contact us for the best rental deals in the area.',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ff8aa57490547.59d7a60d50a42.gif',
    pillarId: '17',
    mobile: '9016284250',
    whatsapp: '9016284250',
    website: 'https://wa.link/fzv',
    location: 'Deesa',
    category: 'Rental'
  },
  {
    id: '18',
    title: 'Property Sell',
    subtitle: 'Residential & Commercial',
    description: 'Premier property listings for selling land, houses, and commercial buildings.',
    imageUrl: 'https://i.postimg.cc/nLqFSBtG/image.png',
    pillarId: '18',
    mobile: '9016284250',
    location: 'Deesa',
    category: 'Property'
  },
  {
    id: '19',
    title: 'Dr. C.K PATEL',
    subtitle: 'Pediatritian Child specialist',
    description: 'Expert pediatric care center in Deesa for your children\'s health needs.',
    imageUrl: '',
    pillarId: '19',
    mobile: '02744223253',
    category: 'Doctors'
  },
  {
    id: '20',
    title: 'Dr. Hiren Patel',
    subtitle: 'Physician',
    description: 'Providing comprehensive medical consulting and general health care.',
    imageUrl: '',
    pillarId: '20',
    mobile: '02744222646',
    category: 'Doctors'
  },
  {
    id: '21',
    title: 'Bhupatsing jenaji Parmar',
    subtitle: 'Electronic Service Ran',
    description: 'Specialized maintenance and repair services for industrial and household electronics.',
    imageUrl: '',
    pillarId: '21',
    mobile: '8980944271',
    category: 'Electronics'
  },
  {
    id: '22',
    title: 'Vimal Sales (Service)',
    subtitle: 'Service Center',
    description: 'Reliable repair services for all your electronic devices and systems.',
    imageUrl: '',
    pillarId: '22',
    mobile: '02744220333',
    category: 'Electronics'
  },
  {
    id: '23',
    title: 'Jay Jalaram',
    subtitle: 'Electronics & Electrics',
    description: 'Authorized dealer for major electrical brands and home utilities.',
    imageUrl: '',
    pillarId: '23',
    category: 'Electronics'
  },
  {
    id: '24',
    title: 'Metro Wire & Cables',
    subtitle: 'Manufacturing',
    description: 'Premium quality wires and robust transmission cables for heavy-duty usage.',
    imageUrl: '',
    pillarId: '24',
    category: 'Electronics'
  },
  {
    id: '25',
    title: 'Smart Home Hub',
    subtitle: 'Automation',
    description: 'Transform your living space with integrated smart home and lighting automation.',
    imageUrl: '',
    pillarId: '25',
    category: 'Electronics'
  },
  {
    id: '26',
    title: 'City Electric Co.',
    subtitle: 'Contractors',
    description: 'Reliable electrical contracting for large-scale urban infrastructure projects.',
    imageUrl: '',
    pillarId: '26',
    category: 'Electronics'
  },
  {
    id: '27',
    title: 'Voltage Tech Services',
    subtitle: 'Equipment Repair',
    description: 'Diagnostics and hardware repair for high-precision laboratory and office tech.',
    imageUrl: '',
    pillarId: '27',
    category: 'Electronics'
  },
  {
    id: '28',
    title: 'Bright Ray Lighting',
    subtitle: 'Design Studio',
    description: 'Architectural lighting design that merges aesthetic appeal with energy efficiency.',
    imageUrl: '',
    pillarId: '28',
    category: 'Electronics'
  },
  {
    id: '29',
    title: 'Industrial Fuse & Switch',
    subtitle: 'Safety Components',
    description: 'High-quality protection gear and automatic cut-off switches for power boards.',
    imageUrl: '',
    pillarId: '29',
    category: 'Electronics'
  },
  {
    id: '30',
    title: 'Master Circuits',
    subtitle: 'PCB Design',
    description: 'Expert PCB board design and electronic component assembly services.',
    imageUrl: '',
    pillarId: '30',
    category: 'Electronics'
  },
];
