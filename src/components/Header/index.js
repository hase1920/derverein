import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
//import { useTheme } from '../Theming'
//import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'

import Container from '../Container'





const Header = ({ siteTitle}) => {
//  const theme = useTheme()
  return (
<>
    <Container noHorizontalPadding
      css={css`
        display:flex;
        margin:25px 0;

        `}
    >
    <Link

      to="/"
      aria-label="go to homepage"
      css={css`
        position:absolute;
       margin-left:30px;
       margin-top:-25px;

       zIndex:50;
        color: black;

        &:hover {
          color: black;
          text-decoration: none;
        }
        @media(max-width:600px) {
          font-size: 16px;
          text-align:right;


        }

      `}
    >
      <img src="/images/B_schwarz.png" alt="logo" width="280px"/>
    </Link>
      <Link
        to="/"
        aria-label="go to homepage"
        css={css`
          font-family: 'Roboto', sans-serif;
          color: black;
          padding-left:100px;
          font-size:24px;
           margin-bottom:20px;
          @media(max-width:700px) {
            font-size: 19px;


          }
          &:hover {
            color: black;
            text-decoration: none;
          }
        `}
      >
        {siteTitle}
      </Link>
    </Container>
      <Container noVerticalPadding>
        <nav
          css={css`
              width: 100%;

            display: flex;
            justify-content: flex-end;
            align-items: space-between;

            margin:auto;

          `}
        >

          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;

              a {
                font-family: 'Roboto',sans-serif;
                text-decoration: none;
                color:black;
                margin-left: 16px;
                margin-right: 16px;
                opacity:1;
                enabled:true;
              }
              .active {

                opacity:.3;
                enabled:false;
              }
            `}
          >

            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
</>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => {
      return(
      <Header siteTitle={data.site.siteMetadata.title} {...props}/>
    )}}
  />
)

export default ConnectedHeader
