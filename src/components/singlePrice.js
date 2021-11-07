import React from 'react'

function SinglePrice(props){

    const {amount, currencyCode, buyLink} = props

    return(
        <div className="buy-info">
            <p className="price">{amount} <span>{currencyCode}</span></p>
            <a href={buyLink} target="_blank" rel="noreferrer">Buy Now</a>
        </div>
    )
}

export default SinglePrice