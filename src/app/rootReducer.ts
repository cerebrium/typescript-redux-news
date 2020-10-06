import { combineReducers } from '@reduxjs/toolkit'

import articleReducer from '../features/articles/articleSlice'

const rootReducer = combineReducers({
  articles: articleReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer