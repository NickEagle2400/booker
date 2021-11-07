import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getBooksData} from '../actions'

function Search() {

    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    
    function handleChange(event){
        setSearch(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        dispatch(getBooksData(search))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" value={search.value} onChange={handleChange} name="search" placeholder="Search between over 100k books..."/>
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search