module.exports = {
  siteMetadata: {
    title: `Stuart Doney`,
    description: `My personal website. I'm a front-end web developer based in the uk`,
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
