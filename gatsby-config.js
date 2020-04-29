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
],
}
