import React from 'react'
import styled from 'styled-component'
import {typography, colors} from '../../utils/styles'

const InputSearch = styled.input`
${({fixed}) => fixed ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`: ''}

    display: flex;
    align-item: center;
    justify-content: center;
    width: 100%;
    height: auto;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    border: 1px solid #e4e4e4;
    ${typography.family.secondary}
    ${typography.weight.semibold}
    ${typography.size.small}
`
function Search() {
  return (
      <>
        <InputSearch  />
      </>
  )
}

export default Search
