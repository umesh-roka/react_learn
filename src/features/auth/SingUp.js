import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';

const SingUp = () => {
  const nav = useNavigate();
  const {handleSubmit,handleChange,values,handleRest} = useFormik({

    initialValues:{
      username:'',
      email:'',
      password:''
    }
  })
  return (
    <Card color="transparent" >
    <Typography variant="h4" color="blue-gray " className='text-center'>
    Register Your Account
    </Typography>
    <Typography color="gray" className="mt-1 font-normal text-center">
    Enter your username,email and password
    </Typography>
    <form onClick={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
      <div className="mb-1 flex flex-col gap-6">

        
      <Typography variant="h6" color="blue-gray" className="-mb-3">

      </Typography>
       <Input
       name='username'
     onChange={handleChange}
       value={values.username}
        label='username'
        />

        <Typography variant="h6" color="blue-gray" className="-mb-3">

        </Typography>
        <Input
           name='email'
           onChange={handleChange}
           value={values.email}
          label='Email'
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        
        </Typography>
        <Input
         name='password'
         onChange={handleChange}
         value={values.password}
        label='password'
        />
      </div>

      <Button type='submit' className="mt-6" fullWidth>
      register
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?
          
         <button type='button' onClick={()=>nav('/login')}> Login </button>
        </Typography>
    </form>
  </Card>
  )
}

export default SingUp
