import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData'

const SpecificProduct = () => {
    const {data,isError,isLoading}=useGetProductByIdQuery(2)
    if (isError) {
        return <h1>Oooh Noo We got an error</h1>
      }
      if (isLoading) {
        return <h1>Loading.....Please Wait</h1>
      }
  return (
    <div>
        <h1>{data?.title}</h1>
        <p>{data?.price}</p>
    </div>
  )
}

export default SpecificProduct