import React from 'react'
import { useDispatch } from 'react-redux';
import {
    selectArticle
} from "../features/singleArticle/singleArticle"
import {
    Link
} from "react-router-dom"

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
    // add ability to reach the store
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(selectArticle(
            props.author,
            props.id,
            props.name,
            props.publishedDate,
            props.summary,
            props.text,
            props.title
        ))
    }

    return (
        <Link to='/fullarticle' className='linkStyle'>
            <div className='singleArticleContainer' key={props.id} onClick={handleClick}>
                <h2 className='singleArticleTitle'>{props.title}</h2>
                <h3 className='singleArticleSummary'>{props.summary}</h3>
                <h4 className='singleArticleAuthor'>Author: {props.author}</h4>
            </div>
        </Link>
    )
}

export default SingleArticle