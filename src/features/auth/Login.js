import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { useUserLoginMutation } from './userApi';


const Login = () => {
const[loginuser,{isLoading}] = useUserLoginMutation();

  const nav = useNavigate();
  const {handleSubmit,handleChange,values,handleRest} = useFormik({

    initialValues:{
      email:'',
      password:''
    },
    onSubmit: async(val)=>{
      try {
        await loginuser(val);
      } catch (err) {
        console.log(err);
      }

    }
  })
  return (
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray " className='text-center'>
     Login
    </Typography>
    <Typography color="gray" className="mt-1 font-normal text-center">
    Enter your email and password
    </Typography>
    <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
      <div className="mb-1 flex flex-col gap-6">

        <Typography variant="h6" color="blue-gray" className="-mb-3">

        </Typography>
        <Input
             name='email'
             handleChange={handleChange}
             value={values.email}
              label='Email'
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
        
        </Typography>
        <Input
             name='password'
             handleChange={handleChange}
             value={values.password}
        label='password'
        />
      </div>

      <Button type='submit' className="mt-6" fullWidth>
        Login
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?
          
         <button type='button' onClick={()=>nav('/singup')}>Sing Up</button>
        </Typography>
    </form>
  </Card>
  )
}

export default Login
