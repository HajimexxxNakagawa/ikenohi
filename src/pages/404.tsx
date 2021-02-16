import React from 'react'
import Layout from '../components/Layout'
import { ColoredILink } from '../utils/ILink'

const NotFound = () => (
  <Layout>
    <div style={{ height: '60vh', paddingTop: '24vh', textAlign: 'center' }}>
      <h1>Sorry...</h1>
      <p>お探しのページは見つかりませんでした</p>
      <ColoredILink to="/">Topへ戻る</ColoredILink>
    </div>
  </Layout>
)

export default NotFound
