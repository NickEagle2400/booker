import React from 'react'

function BuyButton(props){

    const {buyLink} = props
    if(buyLink === undefined)
        return <></>
    else
        return <a href={buyLink} target="_blank" rel="noreferrer">Buy Now</a>
}

export default BuyButton