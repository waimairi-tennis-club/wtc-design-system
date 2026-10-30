// The club's own menu and footer, as on www.wtc.co.nz. Header and Footer use these unless given others.

export type NavLink = { label: string; href: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const wtcMenu: NavItem[] = [
  {
    label: 'Juniors',
    children: [
      { label: 'Junior tennis', href: '/junior-tennis' },
      { label: 'Hot Shots', href: '/junior-tennis#junior-hotshots' },
      { label: 'Junior interclub', href: '/junior-tennis#junior-interclub' },
      { label: 'Junior coaching', href: '/junior-tennis#junior-coaching' },
      { label: 'Fitness with Rhys', href: '/junior-tennis#fitness-with-rhys' },
      { label: 'Junior news', href: '/junior-tennis#junior-news' },
    ],
  },
  {
    label: 'Seniors',
    children: [
      { label: 'Senior tennis', href: '/seniors-tennis' },
      { label: 'Organised play', href: '/seniors-tennis#organised-play' },
      { label: 'Tennis Xpress', href: '/seniors-tennis#tennis-xpress' },
      { label: 'Cardio tennis', href: '/seniors-tennis#cardio-tennis' },
      { label: 'Senior coaching', href: '/seniors-tennis#senior-coaching' },
      { label: 'Senior interclub', href: '/seniors-tennis#senior-interclub' },
      { label: 'Interclub 2026/27 season dates', href: '/seniors-tennis#interclub-season-dates' },
      { label: 'Senior news', href: '/seniors-tennis#senior-news' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Membership', href: '/membership' },
  {
    label: 'About',
    children: [
      { label: 'History', href: '/about-us/history' },
      { label: 'Our sponsors', href: '/about-us/our-sponsors' },
      { label: 'Terms and conditions', href: '/about-us/terms-and-conditions' },
      { label: 'Privacy policy', href: '/about-us/privacy-policy' },
    ],
  },
];

export type FooterColumn = { title: string; href?: string; links: NavLink[] };

export const wtcFooter = {
  about: [
    'Love the game? Join the club!',
    'Waimairi Tennis Club is the place for families, social and competitive players to enjoy tennis year-round.',
  ],
  columns: [
    {
      title: 'Junior tennis',
      href: '/junior-tennis',
      links: [
        { label: 'Hot Shots', href: '/junior-tennis#junior-hotshots' },
        { label: 'Coaching', href: '/junior-tennis#junior-coaching' },
        { label: 'Interclub', href: '/junior-tennis#junior-interclub' },
        { label: 'Fitness with Rhys', href: '/junior-tennis#fitness-with-rhys' },
        { label: 'News', href: '/junior-tennis#junior-news' },
      ],
    },
    {
      title: 'Senior tennis',
      href: '/seniors-tennis',
      links: [
        { label: 'Organised play', href: '/seniors-tennis#organised-play' },
        { label: 'Tennis Xpress', href: '/seniors-tennis#tennis-xpress' },
        { label: 'Cardio Tennis', href: '/seniors-tennis#cardio-tennis' },
        { label: 'Coaching', href: '/seniors-tennis#senior-coaching' },
        { label: 'Interclub', href: '/seniors-tennis#senior-interclub' },
        { label: 'Interclub 2026/27 season dates', href: '/seniors-tennis#interclub-season-dates' },
        { label: 'News', href: '/seniors-tennis#senior-news' },
      ],
    },
    {
      title: 'Quick links',
      links: [
        { label: 'Membership', href: '/membership' },
        { label: 'News', href: '/news' },
        { label: 'Our sponsors', href: '/about-us/our-sponsors' },
        { label: 'Our history', href: '/about-us/history' },
        { label: 'Contact', href: '/contact' },
        { label: 'Book a court', href: 'https://nz.tennisvenues.com/booking/waimairi-tennis-club' },
      ],
    },
  ] as FooterColumn[],
  social: [
    { icon: 'instagram', href: 'https://www.instagram.com/waimairitennisclub/', label: 'Waimairi Tennis Club on Instagram' },
    { icon: 'facebook', href: 'https://www.facebook.com/waimairitennisclub', label: 'Waimairi Tennis Club on Facebook' },
    { icon: 'linkedin', href: 'https://nz.linkedin.com/company/waimairi-tennis-club', label: 'Waimairi Tennis Club on LinkedIn' },
  ] as const,
  legal: [
    { label: 'Terms and Conditions', href: '/about-us/terms-and-conditions' },
    { label: 'Privacy Policy', href: '/about-us/privacy-policy' },
  ],
  charityUrl: 'https://register.charities.govt.nz/CharitiesRegister/ViewCharity?accountId=a2eb3117-248d-de11-9604-0015c5f3da29',
};
