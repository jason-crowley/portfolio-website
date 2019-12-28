require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteTitle: 'Jason Crowley Developer Portfolio',
    siteTitleAlt: 'Jason Crowley | Portfolio',
    siteHeadline: 'Jason Crowley Developer Portfolio',
    siteUrl: 'https://jason-crowley.netlify.com/',
    siteDescription:
      'A portfolio containing a collection of projects developed by Jason Crowley, written in React, JavaScript, Python and more',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: 'Jason Crowley',
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-cara',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jason Crowley Developer Portfolio',
        short_name: 'Jason C. Portfolio',
        description:
          'A portfolio containing a collection of projects developed by Jason Crowley, written in React, JavaScript, Python and more',
        start_url: '/',
        background_color: '#141821',
        theme_color: '#f6ad55',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
};
