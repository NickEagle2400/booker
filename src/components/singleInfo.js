import React from 'react'

function SingleInfo(props){

    const {title, description} = props

    return(
        <div className="book-info">
            <h2>{title}</h2>
            {props.children}
            <p className="description">{description}</p>
        </div>
    )
}

export default SingleInfo