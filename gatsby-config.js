/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Wiley Teleprompting`,
    description: `Wiley Teleprompting is a New York based teleprompting company that provides professional, reliable teleprompting services for video/film and live event productions all over the country. `,
    author: `Laura Wiley`,
  },
  plugins: [    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Wiley Teleprompting`,
      short_name: `Wiley Teleprompting`,
      start_url: `/`,
      background_color: `#111`,
      theme_color: `#111`,
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developerse.google.com/web/fundamentals/web-app-manifest/#display
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-instagram`,
    options: {
      username: `wileyteleprompting`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-netlify-cms`,
],
}
