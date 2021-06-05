module.exports = {
  siteMetadata: {
    siteTitle: 'The Glow',
    siteUrl: 'https://www.theglow.jp/',
    siteCover: 'src/images/site_cover.jpg',
    siteDescription: 'Putting Japanese music in the spotlight.',
    siteLang:'en-US',
    twitterUsername: 'theglow_jp',
    facebookUsername: 'theglow.jp',
    instagramUsername: 'theglow.jp'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: [
          'artists', 'authors', 'albums', 'genres', 'features', 'labels'
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
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
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
