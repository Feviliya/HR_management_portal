import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './userSlice'
export default configureStore({
    reducer:{
        user:UserReducer,
    }
})