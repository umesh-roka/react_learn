import React from 'react'

import * as Yup from'yup';
import {
  Card,
  Input,
  Button,
  Typography,
  Radio,
  Checkbox,
  Textarea,
  Select,
  Option
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from './useSlice';



const Updateform = () => {
  const dispatch = useDispatch();

const userSchema = Yup.object({
  username: Yup.string()
    
    .required('Required'),
  lastName: Yup.string()
  .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,'required all fiels')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
hobbies:Yup.array().min(1).required(),
image: Yup.mixed().test('fileType','invalid Image',(e)=>{
const filesType = ["image/jpeg","image?jpg","image/png"];
return filesType.includes(e.type);
}).required()
});


  const { handleChange, handleSubmit, values, setFieldValue, errors, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      gender: '',
      hobbies: [],
      msg: '',
      country: '',
      imageReview: null,
      image: null
    },
    onSubmit: (val) => {
  dispatch(addUser({...val, id:nanoid()}))
    },
    validationSchema:userSchema,
   
  });

  return (
    <div>
          <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Your Detail
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to Post.
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 space-y-6 ">

          <div>
            <Input
            error={errors.username && touched.username}
              name='username'
              onChange={handleChange}
              value={values.username}
              label="Username" />
            {errors.username && touched.username && <p>{errors.username}</p>}
          </div>

          <div>
            <Input
          
              name='email'
              onChange={handleChange}
              value={values.email}
              label="Email" />
              {errors.email && touched.email &&<p>{errors.email}</p>}
            
          </div>

          <div >
            <h1>Select Your Gender</h1>
            <div className="flex gap-10">
              {radData.map((rad, i) => {
                return <Radio
                  key={i}
                  name="gender"
                  onChange={handleChange}
                  label={rad.label}
                  value={rad.value}
                  color={rad.color}
                />
              })}


            </div>
</div>
            <div>
          
              <h1>Select Your Hobby</h1>
              <div className="flex w-max gap-4">
                {checkData.map((check, i) => {
                  return <Checkbox
               
                    key={i}
                    name="hobbies"
                    onChange={handleChange}
                    label={check.label}
                    value={check.value}
                    color={check.color}
                  />
                })}
              

              </div>
              {errors.hobbies && touched.hobbies && <p className='text-red-600'>{errors.hobbies}</p>}
            </div>

            <div className="w-72 my-3">
              <Select name='country' onChange={(e) => setFieldValue('country', e)} label="Select Country">
                <Option value='nepal'>Nepal</Option>
                <Option value='india'>India</Option>
                <Option value='china'>China</Option>

              </Select>
            </div>


            <div className="w-96">
              <Textarea
                name='msg'
                onChange={handleChange}
                value={values.msg}
                label="Message" />
            </div>
      
<div>
  <Input 
  name='image'
  onChange={(e)=>{
    const file = e.target.files[0];
    setFieldValue('image',file);
    setFieldValue('imageReview',URL.createObjectURL(file))
  }}
  type='file'
  />

  {values.imageReview && <img src={values.imageReview} alt='file'/>}
</div>



          <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>

    </div>
  )
}

export default Updateform
const radData = [
  {
    label: 'Male',
    color: 'red',
    value: 'male'
  },
  {
    label: 'Female',
    color: 'purple',
    value: 'female'
  }
];
const checkData = [
  {
    label: 'Dance',
    color: 'green',
    value: 'dance'
  },
  {
    label: 'Sing',
    color: 'yellow',
    value: 'sing'
  }
];