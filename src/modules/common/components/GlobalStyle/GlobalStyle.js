import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { typography } from '../../utils/styles'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    ${typography.family.base}
    ${typography.weight.normal}
  }

  body {
    margin: 0;
  }
  .mainTitle {
    ${typography.family.secondary}
  }
  .codeContent {
    ${typography.family.code}
  }
`

export default GlobalStyle
