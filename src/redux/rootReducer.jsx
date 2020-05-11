import { combineReducers } from '@reduxjs/toolkit'

import employeesReducer from './slices/employeesSlice'
import globalReducer from './slices/globalSlice'

const rootReducer = combineReducers({
  employees: employeesReducer,
  global: globalReducer,
})

export default rootReducer
