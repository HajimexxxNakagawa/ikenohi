import React from 'react'
import Layout from '../components/Layout'
import { ILink } from '../utils/ILink'

const NotFound = () => (
  <Layout>
    <div style={{ height: '60vh', paddingTop: '24vh', textAlign: 'center' }}>
      <h1>Sorry...</h1>
      <p>お探しのページは見つかりませんでした</p>
      <ILink to="/">Topへ戻る</ILink>
    </div>
  </Layout>
)

export default NotFound
