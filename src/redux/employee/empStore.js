import {configureStore} from '@reduxjs/toolkit'
import {empReducer} from './empReducer'
export const store=configureStore({
    reducer:empReducer
})