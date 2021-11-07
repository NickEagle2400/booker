import React from 'react'
import {useSelector} from 'react-redux'
import SingleHeader from '../components/singleHeader'
import SingleInfo from '../components/singleInfo'
import SingleMeta from '../components/singleMeta'
import SinglePrice from '../components/singlePrice'
import Thumbnail from '../components/thumbnail'

function SingleBook() {
    
    const bookDet = useSelector(state => state.bookDetailsReducer)
    const localData = JSON.parse(sessionStorage.getItem('bookDetails'))

    if(bookDet.item === undefined && localData === null){
        return <div className="loader">Loading . ..</div>
    }
    else {
        let book
        if(localData === null){
            book = bookDet
        }
        else{
            book = localData
        }
        sessionStorage.setItem('bookDetails', JSON.stringify(book))

        return(
            <div className="single-book">
                <SingleHeader background={book.item.volumeInfo.imageLinks?.thumbnail} title={book.item.volumeInfo.title} />
                <div className="content">
                    <div className="thumbnail">
                        <Thumbnail thumbnail={book.item.volumeInfo.imageLinks?.thumbnail} alt={book.item.volumeInfo.title} />
                    </div>
                    <SingleInfo title={book.item.volumeInfo.title} description={book.item.volumeInfo.description} >
                        <SingleMeta 
                            publisher={book.item.volumeInfo?.publisher}
                            authors={book.item.volumeInfo?.authors}
                            averageRating={book.item.volumeInfo?.averageRating}
                            ratingsCount={book.item.volumeInfo?.ratingsCount}
                            printedPageCount={book.item.volumeInfo?.printedPageCount}
                        />
                        <SinglePrice 
                            amount={book.item.saleInfo.listPrice?.amount} 
                            currencyCode={book.item.saleInfo.listPrice?.currencyCode} 
                            buyLink={book.item.saleInfo.buyLink} 
                        />
                    </SingleInfo>
                </div>
            </div>
        )
    }
}

export default SingleBook