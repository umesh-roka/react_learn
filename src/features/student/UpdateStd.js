import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'


const UpdateStd = () => {
  const {id} = useParams();
  // const existUser = users.find((user) => user.id === id);
  const { students } = useSelector((state) => state.studentSlice);

  const existStudent = students.find((student)=>student.id === id);
  console.log(existStudent);
  return (
    <div>
      
    </div>
  )
}

export default UpdateStd
