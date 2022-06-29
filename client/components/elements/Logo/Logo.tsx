import React, { memo, useCallback, FC } from 'react'
import styled from 'styled-components'

import { desktop } from '@components/shared/utils'

const StyledAnchor = styled.a`
  text-decoration: none;
  background-size: 100%;
  background-repeat: repeat;
  background-color: inherit;

  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) -79.2%,
    rgba(255, 255, 255, 0) -57.84%,
    #ffffff 73.63%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-weight: bold;

  font-size: 2rem;
  margin: auto 0;

  ${desktop`
    font-size: 3rem;
    line-height: 4rem;
  `}
`
interface LogoProps {
  href: string
  label: string
}

const Logo: FC<LogoProps> = memo<LogoProps>(({ href, label }: LogoProps) => {
  return <StyledAnchor href={href}>{label}</StyledAnchor>
})

Logo.displayName = 'LogoAnchor'

export default Logo
