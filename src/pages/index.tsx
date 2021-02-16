import React from 'react'
import { graphql } from 'gatsby'
import { PageProps } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'

const Home: React.FC<PageProps<GatsbyTypes.HomeQueryQuery>> = ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const posts = get(data, 'allContentfulBlogPost.edges')

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ArticleList posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
