import { chessTypes } from './chess.types'
export const startMove = data => ({
  type: chessTypes.START_MOVE,
  payload: data,
})
