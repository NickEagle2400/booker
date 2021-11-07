import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getBookDetails} from '../actions'

function BookCard(props) {

    const {imageUrl, title, idCode} = props

    const dispatch = useDispatch()

    function handleClick(){
        dispatch(getBookDetails(idCode))
    }

    return(
        <div className="book-card">
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <Link to={`/${idCode}`} onClick={handleClick}>See more details</Link>
        </div>
    )
}

export default BookCard