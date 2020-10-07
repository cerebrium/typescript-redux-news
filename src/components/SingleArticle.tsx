import React from 'react'

// declare interface
interface SingleArticles {
    name: string,
    id: string
    author: string
    title: string
    summary: string
    text: string
    publishedDate: string
}

const SingleArticle = (props: SingleArticles) => {
    return (
        <div className='singleArticleContainer' key={props.id}>
            <h2 className='singleArticleTitle'>{props.title}</h2>
            <h3 className='singleArticleSummary'>{props.summary}</h3>
            <h4 className='singleArticleAuthor'>Author: {props.author}</h4>
        </div>
    )
}

export default SingleArticle