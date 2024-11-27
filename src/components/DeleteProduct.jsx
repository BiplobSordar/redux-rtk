import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = () => {
    const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation()
    if (error) {
        return <h1>Oooh Noo We got an error</h1>
    }
    if (isLoading) {
        return <h1>Loading.....Please Wait</h1>
    }

    const handleDeleteProduct = async (id) => {
        try {

            await deleteProduct(id)
        } catch (error) {
            console.log('Error adding new product:', error)

        }
    }
    return (
        <div>
            <h1>{data?.title ? `${data.title} Successfully Deleted` : ''}</h1>

            <button onClick={() => handleDeleteProduct(2)} disabled={isLoading}>Delete Product</button> </div>
    )
}

export default DeleteProduct