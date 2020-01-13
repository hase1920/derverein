import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({ children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink style={{color:'#F15A24'}} to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a style={{color:'#F15A24'}} href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
