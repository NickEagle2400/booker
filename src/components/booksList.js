import React from 'react'
import BookCard from './bookCard'
import {useSelector} from 'react-redux'

function BooksList(){

    const bookInfo = useSelector(state => state.bookListReducer)
    console.log(bookInfo.item?.items[1])
    if(bookInfo.item === undefined)
        return <></>
    else
        return(
            <div className="books-list">
                {bookInfo.item?.items.map((book, index) => {
                    return(
                        <BookCard 
                            key={index} 
                            imageUrl={book.volumeInfo?.imageLinks?.thumbnail} 
                            title={book.volumeInfo.title}
                            idCode={book.id} 
                        />
                        )
                    })
                }
            </div>
        )
}

export default BooksList