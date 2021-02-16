import React from 'react'
import { graphql } from 'gatsby'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'
import { ILink } from '../utils/ILink'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import styled from 'styled-components'

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
  padding: 1px 0;
  width: 90%;
  max-width: 700px;
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
      <Helmet title={`${postTitle} | ${siteTitle}`} />
      <TitleWrap>
        <h1 style={{ marginBottom: '0' }}>{postTitle}</h1>
        <p>{publishDate}</p>
      </TitleWrap>
      <ImgWrap>
        <Img alt={postTitle} fluid={heroImage.fluid} className="hero-image" />
      </ImgWrap>
      <ContentsWrap>
        <div
          dangerouslySetInnerHTML={{
            __html: postBody.childMarkdownRemark.html,
          }}
        />
      </ContentsWrap>
      <div style={{ textAlign: 'center' }}>
        <ILink to="/">Topへ</ILink>
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
