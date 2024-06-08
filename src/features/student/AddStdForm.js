import React from 'react'
import {
 
  Input,
  Option,
  Radio,
  Button,
  Select,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addStudent } from './studentSlice';
const AddStdForm = () => {
  const dispatch = useDispatch();

const nav =useNavigate();

  const {handleChange,handleSubmit,values,setFieldValue}=useFormik({
    initialValues:{
fullname:'',
dob:'',
address:'',
gender:''
    },
    onSubmit:(val)=>{
const newStudent ={
  fullname:val.fullname,
dob:val.dob,
address:val.address,
gender:val.gender
};
dispatch(addStudent(newStudent));
     nav(-1);
    }
  })
  return (
    <div className='mx-5 mt-3 space-y-4'>
      <h1>Enter Your Details</h1>
    <form onSubmit={handleSubmit} className='max-w-[400px] space-y-5 '>
      <Input
      name='fullname'
      onChange={handleChange}
      value={values.username}
      label='FullName'
      />

<Input
      name='dob'
      onChange={handleChange}
      value={values.dob}
      label='DOB'
      />

<Input
      name='address'
      onChange={handleChange}
      value={values.address}
      label='Address'
      />

      <div className='py-4'>
      {RadData.map((rad,i)=>{
return <Radio
name='gender'
key={i}
onChange={handleChange}
label={rad.label}
color={rad.color}
value={rad.value}
/>

      })}
      </div>

      <Select name= 'faculty' onChange={(e)=>
        setFieldValue('faculty',e)
      }
      label='Select Faculty'>
      <Option value='bit'>BIT</Option>
      <Option value='bscit'>BscIT</Option>
      <Option value='computer'>Computer Engineering</Option>
      </Select>
      

      <Button type='submit' className='bg-black text-white rounded px-8 mt-3'>Submit</Button>

    </form>
    </div>
  )
}

export default AddStdForm
 const RadData=[{
  label:'Male',
  color:'red',
  value:'Male'
 },
{
  label:'Female',
  color:'pink',
  value:'Female'
}

]