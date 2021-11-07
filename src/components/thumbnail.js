import React from 'react'

function Thumbnail(props){

    const {thumbnail, alt} = props

    return(
        <img src={thumbnail} alt={alt}/>
    )
}

export default Thumbnail