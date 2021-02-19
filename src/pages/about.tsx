import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const About = () => (
  <Layout>
    <ContentsWrap>
      <h1 className="section-headline">このブログについて</h1>
      <h2>イケの日でやりたいこと</h2>
      <p>
        「イケてるケの日をはじめよう」のスローガンのもと、
        イケの日では、毎日の暮らしをより良くしていくためのモノやアイデアを紹介します。
      </p>
      <p>記事タグは、衣・食・住・育・働の5種類。それぞれ、</p>
      <ul>
        <li>衣：服や靴など、身にまとうものについて</li>
        <li>食：食べ物や飲み物など、口にするものについて</li>
        <li>住：家具や雑貨など、生活で使うものについて</li>
        <li>育：子育てに関することについて（2028年頃からかな？笑）</li>
        <li>働：仕事道具や生産性について</li>
      </ul>
      <p>
        このブログ自体も、読んでて「イケてる！」と思えるものにして参ります。
      </p>
      <h2>プライバシーポリシー</h2>
      <p>
        イケの日ではAmazonアソシエイトや楽天アフィリエイト、その他アフィリエイトプログラムを利用しています。
        また、リンク先の商品はイケの日が販売しているのではなく、各リンク先店舗が販売元となります。
        商品購入に関するトラブルに関しては、イケの日では一切の責任を負いかねますのでご了承ください。
      </p>
      <p></p>

      <h1 className="section-headline">製作者について</h1>
      <h2>人物紹介</h2>
      <p>一橋大学経済学部、23卒生です。大学の近くに一人暮らししています。</p>

      <ul>
        <li>
          <a
            href="https://www.notion.so/ff081515b13d4b36a903b1a60cfc9443?v=6e8f4697899a47c7aa141949618372f2"
            target="_blank"
            rel="noopener noreferrer"
          >
            2020年5月からの読書歴
          </a>
        </li>
        <li>
          <a
            href="https://www.notion.so/e958fff9e9f649be8c4407d630dcf945?v=242b2885c7504b6f989488c583b95f7b"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021年の読書歴
          </a>
        </li>
        <li>
          <a
            href="https://note.com/hjm_kn"
            target="_blank"
            rel="noopener noreferrer"
          >
            note
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/hajixxnaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.notion.so/ff0979cf63834144935c6e83bbec9916"
            target="_blank"
            rel="noopener noreferrer"
          >
            職務履歴書
          </a>
        </li>
      </ul>
      <h2>略歴</h2>
      <ul>
        <li>
          2000年：9月14日に誕生。父の転勤で石川→大阪→福井と引っ越し、小学校2年から高校卒業までを福井で過ごす。
        </li>
        <li>
          2019年：一橋大学経済学部に進学と同時に上京。現在の妻と交際を始める。エンジニアの卵になる。
        </li>
        <li>
          2020年：コロナに見舞われつつも、
          <a
            href="https://note.com/yahhoh_digital"
            target="_blank"
            rel="noopener noreferrer"
          >
            まちづくりサークルPro-K
          </a>
          での活動を楽しむ。
        </li>
        <li>
          2021年：3月に当ブログ「イケの日」をスタート。技術スタックはGatsby +
          TypeScript + Contentful + Netlify。
        </li>
        <li>2023年：一橋大学を卒業（予定）</li>
      </ul>
    </ContentsWrap>
  </Layout>
)

export default About

const ContentsWrap = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 5vmin 0;
  width: 90%;
  h2 {
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
    transition: 0.3s;
    color: #2b98b0;
    &:hover {
      color: #54c5de;
    }
  }
`
