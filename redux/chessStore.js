import { createStore } from 'redux'

// import { chessReducer } from './chess/chess.reducer'

import rootReducer from './rootReducer'

export const store = createStore(rootReducer)
