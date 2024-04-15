import React from 'react'

export default function ProfileComp(props) {
  return (
    
         <div>
        <h1>Welcome {props.userName}</h1>
        <p>Employee code: {props.userId}</p>
        <p>{props.city}</p>
        <p>{props.address}</p>
    </div>
    
  )
}
