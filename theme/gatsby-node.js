const fs = require("fs");

/**
 * Guards against filesystem throwing error when trying to find the file 'data'
 */
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"
  if(!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

/**
 * Defining "Timeline" custom type
 * This is timeline of user working/schooling profile.
 */
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Timeline implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      description: String!
    }
  `)
}

/**
 * site page generation.
 */
exports.createPages = async ({ actions, reporter }, { basePath = "/", context={} }) => {
  // user profile/timeline page
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/profile.js"),
    context
  })
}
