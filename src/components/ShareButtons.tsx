import React from 'react'
import styled from 'styled-components'
import {
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

export interface ShareButtonsProps {
  articleUrl: string
  articleTitle: string
  quote: string
}

const ShareButtons = ({
  articleUrl,
  articleTitle,
  quote,
}: ShareButtonsProps) => (
  <Container>
    <FacebookShareButton url={articleUrl} quote={quote}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <LineShareButton url={articleUrl} title={articleTitle}>
      <LineIcon size={32} round />
    </LineShareButton>

    <TwitterShareButton url={articleUrl} title={articleTitle} via="hajixxnaka">
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  </Container>
)

export default ShareButtons

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 0;
`
