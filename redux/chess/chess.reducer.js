import { chessTypes } from './chess.types'

const INITIAL_STATE = {
  knightPosition: [2, 0],
}

const chessReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case chessTypes.START_MOVE:
      return {
        ...state,
        knightPosition: action.payload,
      }

    default:
      return state
  }
}
export default chessReducer
