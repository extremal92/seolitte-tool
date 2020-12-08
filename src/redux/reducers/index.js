import { combineReducers } from 'redux';

import personReducer from './person'
import chartReducer from './chart'
import promoReducer from './promo'
import blogReducer from './blog'
import pagesReducer from './pages'
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  person: personReducer,
  chart: chartReducer,
  promo: promoReducer,
  blog: blogReducer,
  pages: pagesReducer,
  authentication,
  registration,
  users,
  alert
})

export default rootReducer;