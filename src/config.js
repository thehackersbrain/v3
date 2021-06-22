module.exports = {
  siteTitle: 'Gaurav Raj | Hacker, Programmer & FreeLancer',
  siteDescription:
    'I am Gaurav Raj. Hacker, Programmer & FreeLancer. Curious Student learning things while breaking and building things.',
  siteKeywords:
    'Gaurav Raj, thehackersbrain, hackersbrain, hacker, programmer, freelancer, gauravraj0408, hiddenwave, bihar, ctf, ctf player',
  siteUrl: 'https://thehackersbrain.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Gaurav Raj',
  location: 'Bihar, India',
  email: 'techw803@gmail.com',
  github: 'https://github.com/thehackersbrain',
  twitterHandle: '@thehackersbrain',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/thehackersbrain',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thehackersbrain/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thehackersbrain',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Works',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
