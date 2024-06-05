import { useFormik } from 'formik'
import React from 'react'
import{
  Input,
  Button,
  Radio
  
}from "@material-tailwind/react";
const Addform = () => {
  const {handleSubmit,handleChange,values}  = useFormik({
    initialValues:{

      username:'',
      password:''
    },
    onSubmit:{

    }
  })
  return (
    <div className='max-w-[400px] space-y-4'>
      <h1>Enter Your Detail</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <Input
        name='username'
        onChange={handleChange}
        value={values.usernama}
        label='username'
        />
        </div>
        <div className='py-5'>
          <Input
          name='password'
          onChange={handleChange}
          value={values.password}
          label='Password'
          />
        </div>
<div>
  {radDAta.map((rad,i)=>{
    return <Radio
    key={i}
    name='gender'
    onChange={handleChange}
    label={rad.label}
    color={rad.color}
    value={rad.value}
    
    />
  })}
</div>

        <Button type='submit' className="mt-6" fullWidth>
            Submit
          </Button>
      </form>
    </div>
  )
}

export default Addform
const radDAta=[{
  label:'male',
  color:'red',
  value:'male'
},
{
  label:'female',
  color:'black',
  valur:'female'
}
]