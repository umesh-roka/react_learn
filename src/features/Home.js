import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Home = () => {
  const { students } = useSelector((state) => state.studentSlice);

  const nav = useNavigate();
  return (
    <div>
      {students.map((student) => {
        return <div key={student.id}>
          <h1>{student.email}</h1>
          <img src={student.imageReview} alt="" />
          <button onClick={() => nav(`/updatestd/${student.id}`, { state: student })}>Edit</button>
        </div>
      })}



    </div>
  )
}

export default Home