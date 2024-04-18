import React from 'react'

export default function ProductDetailsComp(props) {

  return (
    <div>
        
        <h1>ProductDetailsComp</h1>
        <p>{props.product.name}</p>
        <p>{props.product.category}</p>
        <p>{props.product.price}</p>
        <p>{props.product.country}</p>
        <p>{props.product.currency}</p>
    </div>
  )
}
