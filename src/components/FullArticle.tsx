import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectedArticle } from '../features/singleArticle/singleArticle'
import {
    Link
} from "react-router-dom"

const FullArticle = () => {
    // rendering state
    const [ renderArray, setRenderArray ] = useState<Array<JSX.Element>>([])

    // retrieve selected article from store
    const article = useSelector(selectedArticle)

    useEffect( () => {
        console.log(article)
        let localRenderArray: Array<JSX.Element> = []
        if (article.article) {
            localRenderArray.push(
                <div className='fullArticleContianer'>
                    <h1 className='fullArticleTitle'>{article.article.title}</h1>
                    <div className='fullArticleAuthorBox'>
                        <h3 className='fullArticleName'>{article.article.name}</h3>
                        <h3 className='fullArticlePublishedDate'>{article.article.publishedDate}</h3>
                    </div>
                    <p className='fullArticleText'>{article.article.text}</p>
                </div>
            )
        }
        setRenderArray(localRenderArray)
    }, [article])

    return (
        <div className='fullArticleContainer'>
            <div className='nav'>
                <h1>NEWSPACE</h1>
            </div>
            <div className='content'>
                {renderArray}
                <Link to='/' className='linkContainer'>
                    <div className='linkBox'>
                        Return
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FullArticle