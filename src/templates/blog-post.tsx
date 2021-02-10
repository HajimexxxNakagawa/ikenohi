import React from 'react'
import { graphql } from 'gatsby'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const heroStyles = require('../css/hero.module.css')
const blogPostStyles = require('./blog-post.module.css')

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data }) => {
  const postTitle = get(data, 'contentfulBlogPost.title')
  const postBody = get(data, 'contentfulBlogPost.body')
  const publishDate = get(data, 'contentfulBlogPost.publishDate')
  const heroImage = get(data, 'contentfulBlogPost.heroImage')
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${postTitle.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={postTitle}
            fluid={heroImage.fluid}
          />
        </div>
        <div className={blogPostStyles.wrapper}>
          <h1 className="section-headline">{postTitle}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: postBody.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
