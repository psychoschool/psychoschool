import { combineReducers } from 'redux'
import screenReducer from './screen/screen.slice'
import { modalReducer } from './modals/modals.slice'

export default combineReducers({
  screen: screenReducer,
  modals: modalReducer
})
