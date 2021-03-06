import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
const hello = () => {
  console.log('hello')
}

const IndexPage = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', hello)
    return () => {
      window.removeEventListener('scroll', hello)
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
        // backgroundColor="red"
      />
      <p>
        <Link to="/beautiful"> React Beautiful</Link>
        <Link to="/chess">Chess Game</Link>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        <span></span>
      </p>
    </Layout>
  )
}

export default IndexPage
