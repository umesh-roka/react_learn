import { createSlice } from "@reduxjs/toolkit";
import { addUserToLocal, clearUserFromLocal, getUserFromLocal } from "../share/LocalStorage";


export const userSlice = createSlice({
  name:'userSlice',
  initialState:{
    user:getUserFromLocal()
  },
  reducers:{
    addUser:(state,action)=>{
      state.user = action.payload
      addUserToLocal(state.user);
    },
    userLogout:(state,action)=>{
      state.user = null;
      clearUserFromLocal();
    }
  }
})

export const {addUser,userLogout}= userSlice.actions