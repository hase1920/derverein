import React from 'react'
import { graphql } from 'gatsby'
//import Img from 'gatsby-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from 'components/SEO'
import { css,keyframes } from '@emotion/core'
import Container from 'components/Container'
import Layout from '../components/Layout'
//import { fonts } from '../lib/typography'
import Share from '../components/Share'
import config from '../../config/website'
//import { bpMaxSM } from '../lib/breakpoints'


const Fade = keyframes`

0% {
  opacity:0;
}
100% {
  opacity:1;
}

`
export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  //const author = mdx.frontmatter.author || config.author
  //const date = mdx.frontmatter.date
  const title = mdx.frontmatter.title
//  const banner = mdx.frontmatter.banner


  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <SEO frontmatter={mdx.frontmatter} isBlogPost />
      <article
        css={css`
          width: 100%;
          display: flex;
          flex-direction:column;
          animation: ${Fade} .5s linear;
        `}
      >
        <Container noVerticalPadding
        >
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              font-family:'Roboto Slab', serif;
              letter-spacing:.05rem;
              font-weight: 600;
              margin-bottom: 5s0px;
            `}
          >
            {title}
          </h1>



          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}/${mdx.frontmatter.slug}/`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        slug
        keywords
      }
      body
    }
  }
`
