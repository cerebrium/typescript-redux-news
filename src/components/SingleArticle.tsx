import React from 'react'
import SingleArticles from '../types/interfaces'

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