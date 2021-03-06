import { combineReducers } from 'redux'
import chessReducer from './chess/chess.reducer'

const rootReducer = combineReducers({
  chessPosition: chessReducer,
})

export default rootReducer
