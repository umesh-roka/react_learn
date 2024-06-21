import React from 'react'
import { useGetProductsQuery } from '../share/productApi'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Caras from './Caras';


const Home = () => {
  const {data, isLoading,error}=useGetProductsQuery();
  if(isLoading){
    return <h1>Loading...</h1>
    
  }

  return (
    <div className='px-4 mt-[2%]'>
    <Caras/>

    <div className='mt-[2%]'>

    <h1 className='font-bold  text-2xl bg-blue-gray-200  mx-20 text-center'>All Products</h1>    
    <div className='space-x-3 mt-[2%]  grid grid-cols-4 gap-5'>

       
      {data?.data.map(({_id,product_name,product_detail,product_image})=>{
return <Card className="mt-6 px-2  max-w-[400px] " key={_id}>
<CardHeader color="blue-gray" className="relative max-h-full mb-2">
  <img
    src={product_image}
    alt="card-image"
  />
</CardHeader>
<CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {product_name}
        </Typography>
        <Typography>
         {product_detail}
        </Typography>
      </CardBody>
<CardFooter className="pt-0">
  <Button>Read More</Button>
</CardFooter>
</Card>
      })}
    </div>
    </div>
    </div>
  )
}

export default Home
