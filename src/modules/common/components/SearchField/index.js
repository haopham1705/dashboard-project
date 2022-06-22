import React from 'react'
import styled from 'styled-component'
import {typography, colors} from '../../utils/styles'

const InputSearch = styled.input`
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    border: solid 1px #e4e4e4;
    ${typography.family.secondary}
    ${typography.weight.semibold}
    ${typography.size.small}

`
const SearchField = () => {
  return (
      <>
      <InputSearch />
      </>
  )
}

export default SearchField