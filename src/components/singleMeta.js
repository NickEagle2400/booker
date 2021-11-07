import React from 'react'

function SingleMeta(props){

    const {publisher, authors,averageRating, ratingsCount, printedPageCount } = props

    return(
        <div className="info-meta">
            <p className="meta">Publisher: {publisher}</p>
            <p className="meta">Authors:&nbsp;{authors.map((author, index) => {
                return <span key={index}>{author}&nbsp;</span>
            })}</p>
            <p className="meta">Rating: {averageRating}/5 based on {ratingsCount} reviews</p>
            <p className="meta">Pages: {printedPageCount}</p>
        </div>
    )
}

export default SingleMeta