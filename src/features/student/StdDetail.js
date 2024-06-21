import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeStudents } from './studentSlice';
import { useNavigate } from 'react-router';
const StdDetail = () => {
  const nav =useNavigate();
  const dispatch = useDispatch();

  const { students } = useSelector((state) => state.studentSlice);

  const handleDelete=(id)=>{
dispatch(removeStudents(id));
  }
  return (
    <div className='space-x-8 pl-5 pt-5 flex'>
       {students.map((student) => {
        return <div  key={student.id}>
          <h1>Name: {student.fullname}</h1>
          <h1>Date of Birth: {student.dob}</h1>
          <h1>Address: {student.address}</h1>
          <h1>Gender: {student.gender}</h1>
        
          <button className='bg-greeney rounded-lg mt-2  px-5 ' onClick={()=>nav(`/updatestd/${student.id}`)}>Edit</button>
          <button onClick={handleDelete} className='bg-red-700 rounded-lg mt-2 px-5 float-right'>Remove</button>
    
        </div>
      })}


    </div>
  )
}

export default StdDetail




