import React from 'react'

import GameInput from '@components/blocks/GameInput/GameInput'
import GameWord from '@components/blocks/GameWord/GameWord'
import GameInfo from '@components/blocks/GameInfo/GameInfo'
import Layout from 'Layout/Layout'

type Props = {
  gameWord: string
  score: number
  time: number
  gameInputValue?: string
  onInputChange: (value: string) => Promise<void>
}

export default function Game({
  gameWord,
  score,
  time,
  gameInputValue,
  onInputChange,
}: Props) {
  return (
    <Layout>
      <GameWord word={gameWord} />
      <GameInput value={gameInputValue} handleChange={onInputChange} />
      <GameInfo time={time} score={score} />
    </Layout>
  )
}
