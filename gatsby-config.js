module.exports = {
  siteMetadata: {
    title: 'C&M Electrical (North West) LTD',
  },
  plugins: [
    {resolve: 'gatsby-plugin-react-helmet'},
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `api.candmelectricalltd.co.uk`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,      
      },
    },
    {resolve: `gatsby-plugin-styled-components`},
  ],
}
