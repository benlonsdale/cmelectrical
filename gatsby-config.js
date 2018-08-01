module.exports = {
  siteMetadata: {
    title: 'C&M Electrical (North West) LTD',
  },
  plugins: [
    {resolve: 'gatsby-plugin-react-helmet'},
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `candm-api.test`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
  ],
}
