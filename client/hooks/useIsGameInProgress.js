import { useIsUserPlayingSelector } from '@redux/reducers/game'

export const useIsGameProgress = () => {
  const isUserPlaying = useIsUserPlayingSelector()

  if (!isUserPlaying) {
    return false
  }

  return true
}
