
const bookListReducer = (state, action) => {
    switch(action.type){

        case 'GETBOOKSDATA':{
            return {...state, item: action.payload}
        }
        case 'SETDATA':{
            return {...state, item: action.payload}
        }
        default:{
            return {}
        }
    }
}

export default bookListReducer