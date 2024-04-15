import React, { useState } from 'react'

export default function ProductListComp() {

 let [pList, setPList] = useState(
    [
        {
            pid:10,
            pname:"Refrigerator",
            pdesc:"desc1"
        },

        {
            pid:11,
            pname:"Tubelight",
            pdesc:"desc2"
        },

        {
            pid:12,
            pname:"Machine",
            pdesc:"desc3"
        },

    ]
 )
  return (
    <ul>
        {
            pList.map((product) => 
        <li key={product.pid}>
          {product.pid} &nbsp;
          {product.pname} &nbsp;
          {product.pdesc} &nbsp;
        </li>)
        }
    </ul>
  )
}
