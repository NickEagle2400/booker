import React from 'react'
import {useSelector} from 'react-redux'

function SingleBook() {

    const book = useSelector(state => state.bookDetailsReducer)

    if(book.item === undefined){
        return <></>
    }
    else{
        let buyBtn;
        if(book.item.saleInfo.buyLink){
            buyBtn = <a href={book.item.saleInfo.buyLink} target="_blank" rel="noreferrer">Buy Now</a>
        }
        else{
            buyBtn = <></>
        }
        return(
            <div className="single-book">
                <div className="single-header">
                    <img src={book.item.volumeInfo.imageLinks?.thumbnail}alt={book.item.volumeInfo.title}/>
                    <div className="layer"></div>
                    <h1>{book.item.volumeInfo.title}</h1>
                </div>
                <div className="content">
                    <div className="thumbnail">
                        <img src={book.item.volumeInfo.imageLinks?.thumbnail} alt={book.item.volumeInfo.title}/>
                    </div>
                    <div className="book-info">
                        <h2>{book.item.volumeInfo.title}</h2>
                        <div className="info-meta">
                            <p className="meta">Publisher: {book.item.volumeInfo?.publisher}</p>
                            <p className="meta">Authors:&nbsp;{book.item.volumeInfo?.authors.map((author, index) => {
                                return <span key={index}>{author}&nbsp;</span>
                            })}</p>
                            <p className="meta">Rating: {book.item.volumeInfo?.averageRating}/5 based on {book.item.volumeInfo?.ratingsCount} reviews</p>
                            <p className="meta">Pages: {book.item.volumeInfo?.printedPageCount}</p>
                        </div>
                        <div className="buy-info">
                            <p className="price">{book.item.saleInfo.listPrice?.amount} <span>{book.item.saleInfo.listPrice?.currencyCode}</span></p>
                            {buyBtn}
                        </div>
                        <p className="description">{book.item.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleBook