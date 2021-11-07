import React from 'react'
import Thumbnail from './thumbnail'

function SingleHeader(props){

    const {background, title} = props

    return(
        <div className="single-header">
            <Thumbnail thumbnail={background} alt={title} />
            <div className="layer"></div>
            <h1>{title}</h1>
        </div>
    )
}

export default SingleHeader