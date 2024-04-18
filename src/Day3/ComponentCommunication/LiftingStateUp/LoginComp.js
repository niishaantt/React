import React, { useRef, useState } from 'react'

export default function LoginComp(props) {
   

    let usernameRef = useRef()

  return (

    <>
        <label>UserName</label>
        <input type='text' ref={usernameRef}/><br/>

        <label>Password</label>
        <input type='text'  /><br/>

        <button onClick={ () =>{

            var username = usernameRef.current.value

            props.setUserName(username)
            
        }}>Login</button>

    </>
  )
}
