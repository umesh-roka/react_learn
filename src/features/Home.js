import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const {users} = useSelector((state)=>
  state.userSlice);
  console.log(users);
  return (
    <div>
      
    </div>
  )
}

export default Home
