import React from 'react'
import Search from './search'

function Hero(){
    return(
        <div className="hero">
            <div className="layer"></div>
            <div className="content">
                <h1>Discover new stories with Booker</h1>
                <p>Search for the title of the book and find out what your next reading will be</p>
                <Search />
            </div>
        </div>
    )
}

export default Hero