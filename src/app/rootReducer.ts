import { combineReducers } from '@reduxjs/toolkit'

import articleReducer from '../features/articles/articleSlice'
import selectArticleReducer from '../features/singleArticle/singleArticle'

const rootReducer = combineReducers({
  articles: articleReducer,
  article: selectArticleReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer