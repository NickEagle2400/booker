import React from 'react'
import BookCard from './bookCard'
import {useSelector} from 'react-redux'

function BooksList(){

    const bookList = useSelector(state => state.bookListReducer)
    const localList = JSON.parse(sessionStorage.getItem('bookList'))

    if(bookList.item === undefined && localList === null)
        return <></>
    else{
        let list
        if(localList === null){
            list = bookList
            sessionStorage.setItem('bookList', JSON.stringify(bookList))
        }
        else{
            list = localList
        }
        return(
            <div className="books-list">
                {list.item?.items.map((book, index) => {
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
}

export default BooksList