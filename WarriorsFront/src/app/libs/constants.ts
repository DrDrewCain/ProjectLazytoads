export const SITE_URL = 'https://lazytoads.org';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const BRAND_NAME = 'Lazytoad';
export const SITE_NAME_MULTILINE = ['ACME', 'Conf'];
export const SITE_NAME = 'Lazytoad';
export const META_DESCRIPTION =
  'Lazytoad is an upcoming site for all things gaming. We are currently in development and will be launching in 2023';
export const SITE_DESCRIPTION =
  'Lazytoad is an upcoming site for all things gaming. We are currently in development and will be launching in 2023';
export const DATE = '01 January 2023';
export const SHORT_DATE = 'Jan 1 - 9:00am PST';
export const FULL_DATE = 'Jan 1st 9am Pacific Time (GMT-7)';
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

// export const COOKIE = 'user-id';

export const NAVIGATION = [
    {
      name: 'About Me',
      route: '/aboutMe'
    },
    {
      name: 'Contact Us',
      route: '/contactMe'
    },
    {
      name: 'Home Page',
      route: '/homePage'
    },
    {
      name: 'Game',
      route: '/game'
    }
  ];