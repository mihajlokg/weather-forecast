import { combineReducers } from 'redux'

import search from './search'
import results from './results'

const reducers = combineReducers({
  search,
  results
})

export default reducers
