import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddNewProduct = () => {
    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation()
    if (error) {
        return <h1>Oooh Noo We got an error</h1>
    }
    if (isLoading) {
        return <h1>Loading.....Please Wait</h1>
    }
    const handleAddProduct = async () => {
        try {
            const newProduct = {
                id: 1,
                title: 'Amazing T-Shirt',
                description: 'This  is a t-shirt for men'
            }
            await addNewProduct(newProduct)
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


            <button onClick={handleAddProduct} disabled={isLoading}>Add new</button> </div>
    )
}

export default AddNewProduct