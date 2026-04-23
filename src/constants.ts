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
    title: 'Dr. Ankit M. Patel',
    subtitle: 'Dentist - Doctors',
    description: 'Expert dental care services located in Deesa. Specializing in modern dentistry.',
    imageUrl: 'https://i.postimg.cc/MHSC1TXb/image.png',
    pillarId: '01',
    mobile: '09033661813',
    whatsapp: '09033661813',
    website: 'https://drankitpatel.com',
    location: 'andir road, Deesa',
    category: 'Doctors'
  },
  {
    id: '2',
    title: 'Rental / ભાડે આપવું',
    subtitle: 'Real Estate Solutions',
    description: 'Looking for a house, land, or shop? Contact us for the best rental deals in the area.',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ff8aa57490547.59d7a60d50a42.gif',
    pillarId: '02',
    mobile: '9016284250',
    whatsapp: '9016284250',
    website: 'https://wa.link/fzv',
    location: 'Deesa',
    category: 'Rental'
  },
  {
    id: '3',
    title: 'Property Sell',
    subtitle: 'Residential & Commercial',
    description: 'Premier property listings for selling land, houses, and commercial buildings.',
    imageUrl: 'https://i.postimg.cc/nLqFSBtG/image.png',
    pillarId: '03',
    mobile: '9016284250',
    location: 'Deesa',
    category: 'Property'
  },
  {
    id: '4',
    title: 'Status Ring - Eight',
    subtitle: 'Online Shop & Printing',
    description: 'Customized print-on-demand services and premium products available online.',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop',
    pillarId: '04',
    mobile: '09033661813',
    website: 'https://mydeesa.store',
    location: 'andir road, Deesa',
    category: 'Online Shop'
  },
  {
    id: '5',
    title: 'Patel Sales',
    subtitle: 'Electronics & Electrics',
    description: 'Wholesale and retail of premium electronic goods and home appliances.',
    imageUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop',
    pillarId: '05',
    mobile: '02744221110',
    website: 'https://saiimpex.my.canva.site/mydeesa',
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
    website: 'https://saiimpex.my',
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
    website: 'https://saiimpex.my',
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
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '9',
    title: 'Sarvoday Electronics',
    subtitle: 'Appliances & AC',
    description: 'TV, Fridge, Freezer, and AC service and retail center.',
    imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop',
    pillarId: '09',
    mobile: '09825128514',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '10',
    title: 'Welcome Electronics',
    subtitle: 'Electronics & Services',
    description: 'Complete home entertainment systems and electronic repair services.',
    imageUrl: 'https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=800&auto=format&fit=crop',
    pillarId: '10',
    mobile: '02744221125',
    website: 'https://saiimpex.my',
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
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '12',
    title: 'Shree Ganesh Electricals',
    subtitle: 'Component Supply',
    description: 'A wide range of high-quality electrical components and wiring solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1558444479-c840277800fe?q=80&w=800&auto=format&fit=crop',
    pillarId: '12',
    mobile: '09228150365',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '13',
    title: 'Jay Bhairva Electricals',
    subtitle: 'Lighting & Power',
    description: 'Modern lighting fixtures and energy-efficient power management systems.',
    imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop',
    pillarId: '13',
    mobile: '09426175593',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '14',
    title: 'Savera Electric Agency',
    subtitle: 'Distribution',
    description: 'Authorized distributor for leading electrical brands and appliance manufacturers.',
    imageUrl: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop',
    pillarId: '14',
    mobile: '02744221892',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '15',
    title: 'Jyoti Electrical',
    subtitle: 'Home & Industrial',
    description: 'Comprehensive electrical services for both residential and industrial projects.',
    imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
    pillarId: '15',
    mobile: '9898702414',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '16',
    title: 'Electronics World',
    subtitle: 'Gadgets & More',
    description: 'The ultimate destination for the latest gadgets and consumer technology.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
    pillarId: '16',
    mobile: '8401233233',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '17',
    title: 'Shree Jalaram Appliances',
    subtitle: 'Kitchen & Home',
    description: 'Premium kitchen appliances and home convenience products.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    pillarId: '17',
    mobile: '02744222226',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '18',
    title: 'Vimal Electronics',
    subtitle: 'Service Center',
    description: 'Reliable repair services for all your electronic devices and systems.',
    imageUrl: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop',
    pillarId: '18',
    mobile: '02744220333',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '19',
    title: 'Vandana Power',
    subtitle: 'Energy Solutions',
    description: 'Innovative energy solutions and UPS systems for uninterrupted power.',
    imageUrl: 'https://images.unsplash.com/photo-1592833159057-6fdc2abd40b8?q=80&w=800&auto=format&fit=crop',
    pillarId: '19',
    mobile: '02744224361',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '20',
    title: 'Ganesha Tech',
    subtitle: 'Innovation Hub',
    description: 'Exploring the intersection of modern technology and local business needs.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    pillarId: '20',
    mobile: '09228150365',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '21',
    title: 'Bhupatsing Jenaji Parmar',
    subtitle: 'Electronic Service Ran',
    description: 'Specialized maintenance and repair services for industrial and household electronics.',
    imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dee997dd3df?q=80&w=800&auto=format&fit=crop',
    pillarId: '21',
    mobile: '8980944271',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '22',
    title: 'Apex Electricals',
    subtitle: 'Industrial Solutions',
    description: 'Wholesale suppliers of electrical cables, breakers, and high-voltage equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1517420812314-8e161730099d?q=80&w=800&auto=format&fit=crop',
    pillarId: '22',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '23',
    title: 'Deesa Solar Systems',
    subtitle: 'Renewable Energy',
    description: 'Eco-friendly solar panel installations and maintenance for sustainable power.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
    pillarId: '23',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '24',
    title: 'Metro Wire & Cables',
    subtitle: 'Manufacturing',
    description: 'Premium quality wires and robust transmission cables for heavy-duty usage.',
    imageUrl: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800&auto=format&fit=crop',
    pillarId: '24',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '25',
    title: 'Smart Home Hub',
    subtitle: 'Automation',
    description: 'Transform your living space with integrated smart home and lighting automation.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df8d7?q=80&w=800&auto=format&fit=crop',
    pillarId: '25',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '26',
    title: 'City Electric Co.',
    subtitle: 'Contractors',
    description: 'Reliable electrical contracting for large-scale urban infrastructure projects.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    pillarId: '26',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '27',
    title: 'Voltage Tech Services',
    subtitle: 'Equipment Repair',
    description: 'Diagnostics and hardware repair for high-precision laboratory and office tech.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
    pillarId: '27',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '28',
    title: 'Bright Ray Lighting',
    subtitle: 'Design Studio',
    description: 'Architectural lighting design that merges aesthetic appeal with energy efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1513506496266-aa6bb1b7ba20?q=80&w=800&auto=format&fit=crop',
    pillarId: '28',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '29',
    title: 'Industrial Fuse & Switch',
    subtitle: 'Safety Components',
    description: 'High-quality protection gear and automatic cut-off switches for power boards.',
    imageUrl: 'https://images.unsplash.com/photo-1498048182197-285d1d6a89c3?q=80&w=800&auto=format&fit=crop',
    pillarId: '29',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
  {
    id: '30',
    title: 'Master Circuits',
    subtitle: 'PCB Design',
    description: 'Expert PCB board design and electronic component assembly services.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    pillarId: '30',
    website: 'https://saiimpex.my',
    category: 'Electronics'
  },
];
