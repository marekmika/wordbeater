import React from 'react'

import styled from 'styled-components'

import TextField from '@components/elements/TextField/TextField'

const GameInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`

type Props = {
  value?: string
  handleChange: (value: string) => Promise<void>
}

const GameInput = ({ value, handleChange }: Props): JSX.Element => (
  <GameInputWrapper>
    <TextField value={value} handleChange={handleChange} />
  </GameInputWrapper>
)

export default GameInput
