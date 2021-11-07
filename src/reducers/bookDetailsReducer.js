
const bookDetailsReducer = (state, action) => {
    switch(action.type){
        
        case 'GETBOOKDETAILS':{
            return {...state, item: action.payload}
        }
        case 'SETBOOKDATA':{
            return {...state, item: action.payload}
        }
        default:{
            return {}
        }
    }
}

export default bookDetailsReducer