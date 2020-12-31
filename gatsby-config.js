module.exports = {
  siteMetadata: {
    title: `Stuart Doney`,
    description: `I'm a freelance web design & development that is based in Taunton, Somerset`,
    author: `Stuart Doney`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `Stuart Doney`,
        short_name: `Stuart Doney`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/SDlogo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-B4J9Z6MGP0", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-B4J9Z6MGP0",
          // Setting this parameter is optional
          anonymize: true,
        },
        //  Facebook pixel
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
  ],
}
