import {
  useIsUserPlayingSelector,
  useTimeSelector,
} from '../redux/reducers/game'

export const useIsGameProgress = () => {
  const isUserPlaying = useIsUserPlayingSelector()
  const time = useTimeSelector()

  if (!isUserPlaying || time === 0) {
    return false
  }

  return true
}
