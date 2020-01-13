import styled from '@emotion/styled'

const Bild = styled.img`
width: 50%;
height:auto;
float:left;
margin:0;
padding: 5px 10px;
}
@media(max-width:600px) {
  width:100%;

}


:after {
  clear:both;
}

:before {
  clear:both;
}
`
export default Bild
