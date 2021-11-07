import axios from 'axios'

const baseUrl = process.env.REACT_APP_BOOK_BASE_URL
const api = process.env.REACT_APP_BOOK_API_KEY

export function getBooksData(searchTerm) {
    return function(dispatch) {
        return axios.get(baseUrl + '?q=' + searchTerm + '&maxResults=15&orderBy=relevance&key=' + api )
            .then(({ data }) => {
            dispatch(setBooksData(data));
        });
    };
}
function setBooksData(data){
    return {
        type: 'SETDATA',
        payload: data
    }
}

export const getBookDetails = (bookId) => {
    return function(dispatch) {
        console.log(bookId)
        return axios.get(baseUrl + '/' + bookId + '?key=' + api )
            .then(({ data }) => {
                console.log(data)
                dispatch(setBookDetails(data));
        });
    };
}

function setBookDetails(data){
    return {
        type: 'SETBOOKDATA',
        payload: data
    }
}