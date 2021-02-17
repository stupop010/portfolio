// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

// And then you can use the config in gatsby-config.js
const config = require("gatsby-plugin-config")

module.exports = {
  siteMetadata: {
    title: `Stuart Doney`,
    description: `I'm a freelance web design & development that is based in Taunton, Somerset`,
    author: `Stuart Doney`,
    siteUrl: `https://www.stuartdoney.co.uk`,
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
        icon: `src/images/logoSD.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS,
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
    // Contentful access
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    // Sitemap
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: [`/category/*`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site, allSitePage }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    // Robots.txt file
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.stuartdoney.co.uk",
        sitemap: "https://www.stuartdoney.co.uk/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Recursive Condensed:900",
            "Roboto Mono Condensed:300,500,700:latin",
          ],
        },
      },
    },
  ],
}
