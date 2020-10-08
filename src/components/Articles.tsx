import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {
    addArticle,
    selectArticles
} from '../features/articles/articleSlice'
import SingleArticle from './SingleArticle'
import axios from 'axios'
import { NewsDataOverall } from '../types/interfaces'

const Articles = () => {
    const articles = useSelector(selectArticles)
    const dispatch = useDispatch();
    const [ renderArray, setRenderArray ] = useState<Array<JSX.Element>>([])

    // send an article
    useEffect( () => {
        axios.get<NewsDataOverall>('http://localhost:3001/news').then( response => {
            response.data.articles.forEach( article => {
                dispatch(addArticle(
                    article.source.name,
                    article.author,
                    article.title,
                    article.description,
                    article.content,
                    article.publishedAt
                ))
            })
        })
        // for (let i = 0; i < 10; i++) {
        //     dispatch(addArticle(
        //         'newsBTC',
        //         'Nick Chong',
        //         'Canadian Central Bank Releases Extensive Report on Viability of CBDCs',
        //         'Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency projects. This trend is seemingly a response to the persistence…',
        //         'Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro…Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro…Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro…Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro…Central bank digital currencies, often known as CBDCs, are seemingly imminent: over recent months, central banks around the world have revealed that they are working on their own digital currency pro…',
        //         '2020-10-06T03:02:08Z'
        //     ))
        // }
    }, [dispatch])

    // when articles arrive map them to render
    useEffect( () => {
        // define array to be set into render array
        let localRenderArray: Array<JSX.Element> = []

        // when a new article arrives in the store, map it into the component
        if (articles.articles.length > 0) {
            articles.articles.forEach( (article: { 
                name: string; 
                id: string; 
                author: string; 
                title: string; 
                summary: string; 
                text: string; 
                publishedDate: string; 
            }) => {
                localRenderArray.push(
                    <SingleArticle
                        name={article.name}
                        id={article.id}
                        author={article.author}
                        title={article.title}
                        summary={article.summary}
                        text={article.text}
                        publishedDate={article.publishedDate}
                    />
                )
            })
        }

        // set the array into render
        setRenderArray(localRenderArray)
    }, [articles])
    return (
        <div className='articleDisplayContainer' key={1}>
            {renderArray}
        </div>
    )
}

export default Articles