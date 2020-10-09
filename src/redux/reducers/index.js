import { combineReducers } from 'redux';

import personReducer from './person'
import chartReducer from './chart'

const rootReducer = combineReducers({
  person: personReducer,
  chart: chartReducer,
})

export default rootReducer;