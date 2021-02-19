import React from 'react'
import { graphql } from 'gatsby'
import { PageProps } from 'gatsby'
import { SEO } from '../utils/SEO'
import get from 'lodash/get'
import Img from 'gatsby-image'
import BlogEnd from '../components/BlogEnd'
import Layout from '../components/Layout'
import Toc from '../components/Toc'
import styled from 'styled-components'

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
  const postTitle = get(data, 'contentfulBlogPost.title')
  const postBody = get(data, 'contentfulBlogPost.body')
  const publishDate = get(data, 'contentfulBlogPost.publishDate')
  const heroImage = get(data, 'contentfulBlogPost.heroImage')
  const description = get(data, 'contentfulBlogPost.description')
  const tags = get(data, 'contentfulBlogPost.tags')

  const imgSrc = heroImage.fluid.srcSetWebp.split(' ')
  const imgSrcUrl = `https:${imgSrc[0]}`
  return (
    <Layout>
      <SEO
        title={postTitle}
        image={imgSrcUrl}
        path={location.pathname}
        description={description.childMarkdownRemark.excerpt}
      />
      <TitleWrap>
        <h1 style={{ marginBottom: '0' }}>{postTitle}</h1>
        <p>{publishDate}</p>
      </TitleWrap>
      <ImgWrap>
        <Img alt={postTitle} fluid={heroImage.fluid} className="hero-image" />
      </ImgWrap>
      <ContentsWrap>
        <Toc
          headlines={postBody.childMarkdownRemark.headings}
          path={location.pathname}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: postBody.childMarkdownRemark.html,
          }}
        />
      </ContentsWrap>
      <BlogEnd tags={tags} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
      body {
        childMarkdownRemark {
          html
          headings(depth: h2) {
            value
          }
        }
      }
    }
  }
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  text-align: center;
`
const ImgWrap = styled.div`
  position: relative;
  text-align: center;
  margin: 3rem auto;
  width: 90%;
  max-width: 800px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -10px,
    rgba(0, 0, 0, 0.22) 0px 18px 36px -18px;
`

const ContentsWrap = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 5vmin 0;
  width: 90%;
  a {
    text-decoration: none;
    transition: 0.3s;
    color: #2b98b0;
    &:hover {
      color: #54c5de;
    }
  }
`
