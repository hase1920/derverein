import React from 'react'

import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import Code from './Code'
//import Divi from './Divi'

//import MyImg from './MyImg'
import MyVideos from './MyVideos'
import MySpan from './MySpan'
//import Mysection from './Mysection'
import Blockquote from './blockquote'
import MyArticle from './MyArticle'
import Subtitleh3 from './Subtitleh3'
import Subtitleh4 from './Subtitleh4'
import MyUl from './MyUl'
import MyOl from './MyOl'
import MyHr from './MyHr'
import MyLink from './MyLink'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <Subtitleh3 {...props} />,
  h4: props => <Subtitleh4 {...props} />,
  p: props => <Paragraph {...props} />,
  article: props => <MyArticle {...props} />,
  iframe: props => <MyVideos {...props} />,
  ul: props => <MyUl {...props} />,
  ol: props => <MyOl {...props} />,
  hr: props => <MyHr {...props} />,
  a: props => <MyLink {...props} />,
  span: props => <MySpan {...props}/>,
  blockquote: props => <Blockquote {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
