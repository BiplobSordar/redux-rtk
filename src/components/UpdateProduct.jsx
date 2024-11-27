import React from 'react'
import { useUpdateProductMutation } from '../app/service/dummyData'

const UpdateProduct = ({productId}) => {
    const [UpdateProduct, { data, error, isLoading }] = useUpdateProductMutation()

    if (error) {
        return <h1>Oooh Noo We got an error</h1>
    }
    if (isLoading) {
        return <h1>Loading.....Please Wait</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {

                title: 'Title Updated',


            }
            await UpdateProduct({
                id: productId,
                updatedProduct: updatedProductData
            })
        } catch (error) {
            console.log('Error adding new product:', error)

        }
    }
    return (
        <div>
            <div>
                <h1>{data?.id}</h1>
                <h1>{data?.title}</h1>
                <h1>{data?.description}</h1>
            </div>


            <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button> </div>
    )
}

export default UpdateProduct