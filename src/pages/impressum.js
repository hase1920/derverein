import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import Layout from 'components/Layout'
import Link from 'components/Link'
//import { useTheme } from 'components/Theming'
import Container from 'components/Container'





export default function Index({ data: { site } }) {
  //const theme = useTheme()


  return (
    <Layout site={site}>

      <Container
        css={css`
          display:flex;
          flex-wrap:wrap;
          padding-bottom: 0;
          justify-content: space-between;
          font-size:14px;
        `}
      >
<div>

<h1 style={{fontSize:'22px'}}>Verschönerungsverein Bacharach</h1>

postalische Adresse VVB...<br/>
55422 Bacharach<br />
Email: [wird demnächst eingetragen]<br/>
Tel: [wird demnächst eingetragen]<br />

<br/>
<p>Webseite noch im Aufbau...</p>
<Link to="/datenschutz">Unsere Datenschutzbestimmungen</Link><br/><br/>

Website: Programmierung von René Broich // Gestaltung von Katrin Gloggengießer, Bacharach<br/>
Email: renbroi@icloud.com


</div>


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

  }
`
