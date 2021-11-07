import React from 'react'
import BuyButton from './buyButton'

function SinglePrice(props){

    const {amount, currencyCode, buyLink} = props

    return(
        <div className="buy-info">
            <p className="price">{amount} <span>{currencyCode}</span></p>
            <BuyButton buyLink={buyLink}/>
        </div>
    )
}

export default SinglePrice