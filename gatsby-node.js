const path = require("path")

// create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       blogs: allStrapiBlogs {
//         nodes {
//           slug
//         }
//       }
//     }
//   `)

//   result.data.blogs.nodes.forEach(blog => {
//     createPage({
//       path: `/blogs/${blog.slug}`,
//       component: path.resolve(`src/templates/blog-template.js`),
//       context: {
//         slug: blog.slug,
//       },
//     })
//   })
// }

//create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    services: allContentfulService {
      nodes {
        slug
      }
    }
  }
`)

  result.data.services.nodes.forEach(service => {
    createPage({
      path: `/services/${service.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: service.slug,
      },
    })
  })
}
