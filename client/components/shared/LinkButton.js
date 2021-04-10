import React from 'react'
import styled from 'styled-components'
import { node, func } from 'prop-types'

import theme from '@styles/theme'

const LinkButton = ({ children, onClickAction }) => {
  return <StyledButton onClick={onClickAction}>{children}</StyledButton>
}

const StyledButton = styled.button`
  color: inherit;
  background-color: inherit;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  text-decoration-line: underline;
  border: 0;

  &:hover {
    color: ${theme.colors.grey};
    cursor: pointer;
  }
`

LinkButton.prototype = {
  children: node.isRequired,
  onClickAction: func.isRequired,
}

export default LinkButton
