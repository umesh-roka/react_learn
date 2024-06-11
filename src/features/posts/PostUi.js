import { AccordionBody,Button} from '@material-tailwind/react'
import React from 'react'
import {  useAddPostMutation, useGetUserPostQuery, useRemovePostMutation } from './postApi';

const PostUi = ({ user }) => {

  const { isLoading, isError, error, data, isFetching } = useGetUserPostQuery(user);

  const [addPost,{isLoading:load,data:dat,isFetching:fetching}] = useAddPostMutation();


const [delPost,{isLoading:lo}] = useRemovePostMutation();

  return (


    <AccordionBody >
<div className='flex justify-between'>
      <h1 className='font-bold text-2xl'>{user.info}</h1>
      <Button size='sm' className='bg-green-500' loading={load} onClick={()=>addPost(user)}>ADD </Button>

      </div>
      {data?.map((post) => {
        return <div key={post.id} className='flex justify-between space-y-4 items-baseline'>
          <h1>{post.title}</h1>
          <Button size='sm' loading={lo} onClick={()=>delPost(post.id)} className='bg-red-400'>Delete</Button>
        
        </div>
      })}

    </AccordionBody>



  )
}

export default PostUi