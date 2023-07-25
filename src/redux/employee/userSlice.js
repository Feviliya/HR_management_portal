<<<<<<< HEAD

import { createSlice } from '@reduxjs/toolkit'
export const UserSlice = createSlice( {
  name:"user",
  initialState:{
    user:{
        user:'fhgh',
    },
  },
  reducers: {
    login:(state,action)=>{
        state.user=action.payload;
    },
    logout: (state)=>{
        state.user=null;
    },
  },
})

export const {login,logout}=UserSlice.actions;
export const selectUser = (state) => state.user.user; 
export const selectUserName = (state) => state.user.user.name;
=======

import { createSlice } from '@reduxjs/toolkit'
export const UserSlice = createSlice( {
  name:"user",
  initialState:{
    user:{
        user:'fhgh',
    },
  },
  reducers: {
    login:(state,action)=>{
        state.user=action.payload;
    },
    logout: (state)=>{
        state.user=null;
    },
  },
})

export const {login,logout}=UserSlice.actions;
export const selectUser = (state) => state.user.user; 
export const selectUserName = (state) => state.user.user.name;
>>>>>>> 4ecba5203710dfd87571a9ce43e3f03a9eb104c8
export default UserSlice.reducer;