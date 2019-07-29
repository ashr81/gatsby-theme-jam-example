module.exports = ({ contentPath = 'data', basePath='/' }) => ({
  siteMetadata: {
    title: "Gatsby Theme Jam",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath
      }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Timeline"
      }
    }
  ]
})