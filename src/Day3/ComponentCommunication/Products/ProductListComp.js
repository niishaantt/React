import React, { useState } from 'react'
import ProductDetailsComp from './ProductDetailsComp'

export default function ProductListComp1() {

    var productList = 
    [
        {
            name: "Boat Stone 600",
            category:"Big Speakers",
            price: 1000,
            country:"India",
            currency:"INR"
        },

        {
            name: "One Plus Bluetooth",
            category:"Bluetooth Headset",
            price: 1200,
            country:"India",
            currency:"INR"
        },

        {
            name: "One Plus 9R",
            category:"Mobile Phones",
            price: 45000,
            country:"India",
            currency:"INR"
        },

    ]

    let[isVisible, setisVisibile] = useState(false)

    let[selectedProduct, setSelectedProduct] = useState({})


 return (
    <>
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Category</td>
                <td>Price</td>
                
            </tr>
        </thead>

        <tbody>
            {
                productList.map(product=><tr>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td><button  onClick={ ()=>{

                        setisVisibile(true)
                        setSelectedProduct(product)
                    }}>Show Details</button></td>
                </tr>)
            }
        </tbody>
    </table>

    { 
     //we will display ProductDetail conditionally
    isVisible ? <ProductDetailsComp product={selectedProduct}></ProductDetailsComp> : ""
    
    }
    
    </>
  )
}
