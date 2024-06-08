import { createSlice } from "@reduxjs/toolkit";
import { getStudentsFromLocal, setStudentsToLocal } from "../../hooks/studentStorage";


export const studentSlice = createSlice({
  name:'studentSlice',
  initialState:{
    students:getStudentsFromLocal()
  },
  reducers:{
    addStudent:(state,action)=>{
      state.students.push(action.payload);
      setStudentsToLocal(state.students);

    },
    updateStudent:(state,action)=>{
     state.students = state.students.map((student) => student.id === action.payload.id ? action.payload:student);
    },
    removeStudents:(state,action)=>{
      state.students.splice(action.payload,1);
    }
  }
})
export const {addStudent,updateStudent,removeStudents} = studentSlice.actions;