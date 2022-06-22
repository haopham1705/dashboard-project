import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, typography } from '../../utils/styles'

const COLOR_MAPPING = {
  primary: {
    background: colors.primary,
    hover: colors.greenDark,
    text: colors.white,
  },
  secondary: {
    background: colors.gray5,
    hover: colors.gray4,
    text: colors.gray1,
  },
  danger: {
    background: colors.red,
    hover: colors.redDark,
    text: colors.white,
  },
  warning: {
    background: colors.yellow,
    hover: colors.yellowLight,
    text: colors.black,
  },
  success: {
    background: colors.greenDark,
    hover: colors.greenLight,
    text: colors.white,
  },
  info: {
    background: colors.cyan,
    hover: colors.cyanLight,
    text: colors.black,
  },
  light: {
    background: colors.white,
    hover: colors.black,
    text: colors.black,
  },
  dark: {
    background: colors.white,
    hover: colors.gray1,
    text: colors.black,
  },
  link: {
    background: colors.white,
    hover: colors.blueLight,
    text: colors.blue,
  }
}

const SIZE_MAPPING = {
  large: {
    padding: '0 2rem',
    height: '2.5rem',
    typography: typography.size.medium,
  },
  medium: {
    padding: '0 1.25rem',
    height: '2rem',
    typography: typography.size.small,
  },
  small: {
    padding: '0 0.75rem',
    height: '1.25rem',
    typography: typography.size.xsmall,
  },
}

const DECORATION_MAPPING = {
  underline: {
    typography: typography.textDecoration.underline,
  },
  lineThrough: {
    typography: typography.textDecoration.lineThrough,
  },
  overline: {
    typography: typography.textDecoration.overline,
  },
  none: {
    typography: typography.textDecoration.none,
  }
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  border: 0;
  border-radius: 2rem;
  align-items: center;
  ${typography.weight.semibold}

  + button {
    margin-left: 1rem;
  }

  ${({ variant, disabled }) => {
    if (disabled) {
      return `
        background: ${colors.gray4};
        color: ${colors.gray2};
      `
    }

    const { background, hover, text} = COLOR_MAPPING[variant]

    return `
      background: ${background};
      color: ${text};
    
      :hover {
        background: ${hover};
        cursor: pointer;
      }
    `
  }}
  
  ${({ size }) => {
    const { height, padding, typography } = SIZE_MAPPING[size]

    return `
      height: ${height};
      padding: ${padding};
      ${typography}
    `
  }}
  ${({decoration}) => {
  }}
`

const Button = ({ label, variant, size, disabled, onClick, ...restProps }) => {
  return (
    <StyledButton
      {...restProps}
      disabled={disabled}
      onClick={!disabled && onClick}
      variant={variant}
      size={size}
    >
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['large', 'medium']),
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  variant: 'primary',
  size: 'large',
  type: 'button',
}

export default Button
