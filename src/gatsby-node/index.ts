// import { GatsbyNode } from 'gatsby'

// const path = require('path')

// type Result = {
//   allContentfulPost: GatsbyTypes.ContentfulBlogPostConnection
// }

// export type PostContext = {
//   slug: GatsbyTypes.Maybe<string> | undefined
// }

// const query = `
// {
//   allContentfulBlogPost {
//     edges {
//       node {
//         title
//         slug
//       }
//     }
//   }
// }
// `

// export const createPages: GatsbyNode['createPages'] = async ({
//   graphql,
//   actions,
// }) => {
//   const { createPage } = actions
//   const result = await graphql<Result>(query)
//   const { edges } = result!.data!.allContentfulPost

//   const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx')

//   edges.forEach((edge) => {
//     createPage<PostContext>({
//       path: `/blog/${edge.node.slug}/`,
//       component: blogPostTemplate,
//       context: {
//         slug: edge.node.slug,
//       },
//     })
//   })
// }
