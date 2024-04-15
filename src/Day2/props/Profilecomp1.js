import React from 'react'

export default function Profilecomp1(props) {
  return (
    <div>
        <h1>Welcome {props.user.userName}</h1>
        <p>Employee code: {props.user.userId}</p>
        <p>{props.user.city}</p>
        <p>{props.user.address}</p>
    </div>
  )
}
