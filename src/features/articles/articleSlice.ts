import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// "source": {
//     "id": null,
//     "name": "newsBTC"
//     },
//     "author": "Nick Chong",
//     "title": "Canadian Central Bank Releases Extensive Report on Viability of CBDCs",
//     "description": "Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency projects. This trend is seemingly a response to the persistence…",
//     "url": "https://www.newsbtc.com/2020/10/06/canadian-central-bank-releases-extensive-report-on-viability-of-cbdcs/",
//     "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/10/bantersnaps-gdQnsMbhkUs-unsplash-scaled.jpg",
//     "publishedAt": "2020-10-06T03:02:08Z",
//     "content": "Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro… [+2279 chars]"
//     },

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
    articles: ArticleState[]
}

export const articleSlice = createSlice({

    // declare the initial state
    name: 'article',
    initialState: [] as ArticleState[],
    // make the reducers
    reducers: {
        addArticle: {
            reducer: (state, action: PayloadAction<ArticleState>) => {
                state.push(action.payload)
            },
            prepare: (
                    name: string,
                    author: string,
                    title: string,
                    summary: string,
                    text: string,
                    publishedDate: string
                ) => {
                const id = uuidv4()
                return { payload: {id, name, author, title, summary, text, publishedDate} }
            }
        }
    },
});

// export the functions
export const { addArticle } = articleSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectArticles = (state: stateInterface) => state;

export default articleSlice.reducer;
