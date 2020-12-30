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
  ],
}
