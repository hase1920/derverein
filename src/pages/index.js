import React from 'react'
import { graphql } from 'gatsby'
import { css,keyframes } from '@emotion/core'
//import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import Img from 'gatsby-image'

const Faden = keyframes`
 0%{
   opacity:0;
 }
 100%{
   opacity:1;
 }

`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()


  return (
    <Layout site={site}>

      <Container noVerticalPadding
       css={css`
        display:flex;
        flex-wrap:wrap;
        animation: ${Faden} .4s linear;
         `}
      >
            {allMdx.edges.map(({ node: post }) => (

        <section  key={post.id}>
            <h2

              css={css({

                position:'relative',
                top:'9px',
                textAlign:'center',
                lineHeight:1,
                padding:'1%',
                background: 'black',
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
               style= {{fontSize: '16px',color: 'white'}}
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            {post.frontmatter.banner ?
              <div
                css={css({

                 padding:0,
                 margin:0
                })}>
                <Link
                  aria-label={`View ${post.frontmatter.title}`}
                  to={`/${post.fields.slug}`}
                >
                  <Img sizes={post.frontmatter.banner.childImageSharp.sizes} />
                </Link>
              </div>
            :  <Link
                aria-label={`View ${post.frontmatter.title}`}
                to={`/${post.fields.slug}`}
              ><p style={{fontWeight:400,fontSize:'15px'}}>{post.frontmatter.description}</p>
              </Link>
            }
</section>

        ))}

    </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
        limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 130)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 280, maxHeight: 200) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
