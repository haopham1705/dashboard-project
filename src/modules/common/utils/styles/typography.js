import 'typeface-source-sans-pro'
import { css } from 'styled-components'

const typography = {
  family: {
    base: css`
      font-family: 'Source Sans Pro', sans-serif;
    `,
    secondary: css`
      font-family: 'Montserrat', sans-serif;
    `,
    code: css`
      font-family: 'Courier Prime', monospace;
    `,
  },
  size: {
    huge: css`
      font-size: 2.25rem;
      line-height: 2.5rem;
    `,
    large: css`
      font-size: 1.5rem;
      line-height: 2rem;
    `,
    medium: css`
      font-size: 1.125rem;
      line-height: 1.625rem;
    `,
    small: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    xsmall: css`
      font-size: 0.875rem;
      line-height: 1.125rem;
    `,
  },
  weight: {
    normal: css`
      font-weight: 400;
    `,
    semibold: css`
      font-weight: 600;
    `,
    bold: css`
      font-weight: 700;
    `
  },
  textDecoration: {
    none: css`
      text-decoration: none;
    `,
    underline: css`
      text-decoration: underline;
    `,
    lineThrough: css`
      text-decoration: line-through;
    `,
    overline: css`
      text-decoration: overline;
    `,
    wavy: css`
      text-decoation: underline wavy;
    `
  }
}

export default typography
