const path = require('path');

module.exports = {
  siteMetadata: {
    siteTitle: 'The Glow',
    siteUrl: 'https://www.theglow.jp/',
    siteCover: 'src/images/site_cover.jpg',
    siteDescription: 'Putting Japanese music in the spotlight.',
    siteLang: 'en-US',
    twitterUsername: 'theglow_jp',
    facebookUsername: 'theglow.jp',
    instagramUsername: 'theglow.jp',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        helpers: path.join(__dirname, 'src/helpers'),
        hooks: path.join(__dirname, 'src/hooks'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: [
          'artists',
          'authors',
          'albums',
          'genres',
          'features',
          'labels',
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
