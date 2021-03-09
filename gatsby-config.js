globalThis.fetch = require('node-fetch')
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-firebase',
    //   options: {
    //     credentials: {
    //       apiKey: 'AIzaSyBnqdv4d-qJuhYGL_TpjWvrcJLH4ac_Cro',
    //       authDomain: 'vietapp-b0ff7.firebaseapp.com',
    //       projectId: 'vietapp-b0ff7',
    //       storageBucket: 'vietapp-b0ff7.appspot.com',
    //       messagingSenderId: '230894478414',
    //       appId: '1:230894478414:web:85f81439d7753d75b40f1f',
    //       measurementId: 'G-D4YSLT234W',
    //     },
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
