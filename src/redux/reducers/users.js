import  { Types } from '../actions/user'

const INITIAL_STATE = {
    items: [],
    erro: null
}

export default function users (state = INITIAL_STATE, action) {

    switch(action.type){
       case Types.GET_USER_SUCCESS: return { ...state,  items: action.payload.data }  
       case Types.FAIL: return { ...state,  erro: action.payload.error.message }  
       default: { 
           return state 
        }
    }
}