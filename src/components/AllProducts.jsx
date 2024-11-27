import React from 'react'
import { useGetAllProductsQuery } from '../app/service/dummyData'




const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery()
  console.log(data)

  if (isError) {
    return <h1>Oooh Noo We got an error</h1>
  }

  return (
    (isLoading ? <h1>Loading.....Please Wait</h1> : <div>
      {data?.products.map((item) => <>
        <h1 key={item.id}>{item.title}</h1>
        <p>{ item.description}</p>
        </>
      )}
    </div>)
    // <>products</>
  )
}

export default AllProducts