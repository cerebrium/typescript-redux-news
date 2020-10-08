import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// make my interface for what the article looks like
interface ArticleState {
    name: string,
    id: string
    author: string
    title: string
    summary: string
    text: string
    publishedDate: string
}

// make interface for state
interface stateInterface {
    article: ArticleState
}

export const articleSlice = createSlice({

    // declare the initial state
    name: 'singleArticle',
    initialState: {} as ArticleState,
    // make the reducers
    reducers: {
        selectArticle: {
            reducer: (state, action: PayloadAction<ArticleState>) => {
                state.author = action.payload.author
                state.id = action.payload.id
                state.name = action.payload.name
                state.publishedDate = action.payload.publishedDate
                state.summary = action.payload.summary
                state.text = action.payload.text
                state.title = action.payload.title
            },
            prepare: (
                    author: string,
                    id: string,
                    name: string,
                    publishedDate: string,
                    summary: string,
                    text: string,
                    title: string,
                ) => {
                return { payload: {id, name, author, title, summary, text, publishedDate} }
            }
        }
    },
});

// export the functions
export const { selectArticle } = articleSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectedArticle = (state: stateInterface) => state;

export default articleSlice.reducer;
