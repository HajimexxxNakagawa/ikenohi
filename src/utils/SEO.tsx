//components/seo.js

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const defaultImage = require('../img/Hero.png')

console.log(defaultImage)
interface SEOProps {
  title?: string
  description?: string
  image?: string
  path?: string
}

export const SEO = ({ title, description, image, path }: SEOProps) => {
  const { site, allContentfulPerson } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            twitterUsername
          }
        }
        allContentfulPerson {
          edges {
            node {
              image {
                fluid {
                  srcWebp
                }
              }
            }
          }
        }
      }
    `
  )
  const imgSrcUrl =
    'https:' + allContentfulPerson.edges[0].node.image.fluid.srcWebp

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || imgSrcUrl,
    url: `${siteUrl}${path}`,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang="ja" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}
