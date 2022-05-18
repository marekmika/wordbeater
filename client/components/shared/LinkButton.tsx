import React from 'react'
import styled from 'styled-components'

import theme from '@styles/theme'
import { desktop, largeMobile } from '@components/shared/utils'

interface LinkButtonProps {
  children: React.ReactNode
  onClickAction: () => void
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClickAction,
}): JSX.Element => {
  return <StyledButton onClick={onClickAction}>{children}</StyledButton>
}

const StyledButton = styled.button`
  color: inherit;
  background-color: inherit;

  text-align: center;
  text-decoration-line: underline;
  border: none;
  outline: none;

  &:hover {
    color: ${theme.colors.grey};
    cursor: pointer;
  }

  font-size: 1.2rem;

  ${largeMobile`
    font-size: 1.8rem;
  `}

  ${desktop`
    font-size: 2.5rem;
  `}
`

export default LinkButton
