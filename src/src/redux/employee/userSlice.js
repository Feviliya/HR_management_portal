
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
export default UserSlice.reducer;