import React, { forwardRef } from 'react'
import { Avatar as MaterialUiAvatar } from '@material-ui/core'
import styled from 'styled-components'
import { desktop } from '@components/shared/utils'

type Props = {
  alt: string
  src?: string
  onClick?: () => void
}

const StyledAvatar = styled(MaterialUiAvatar)`
  && {
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;

    ${desktop`
      height: 4rem;
      width: 5rem;
    `}
  }
`

const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ alt, src, ...props }, ref) => {
    return <StyledAvatar ref={ref} alt={alt} src={src} {...props} />
  }
)

export default Avatar
