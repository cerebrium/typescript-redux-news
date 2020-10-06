import React from 'react'
import Articles from '../components/Articles'
import '../App.scss'

const Home = () => {

    return (
        <div className='homeOverallContainer'>
            <div className='nav'>
                <h1>NEWSPACE</h1>
            </div>
            <div className='content'>
                <Articles />
            </div>
        </div>
    )
}

export default Home