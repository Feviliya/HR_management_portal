import {login_employee} from './empTypes'
const initialState={
    name:""
}
const empReducer = (state=initialState,action) =>{
    switch(action.type){
        case login_employee:return{
            ...state,
            name:"Feviliya"
        }
    }
}