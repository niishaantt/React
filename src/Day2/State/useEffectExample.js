import React, { useEffect, useRef, useState } from 'react'

export default function UseEffectExample() {

   let[message, setMessage]=  useState("Welcome to PSL!!")

   let inputRef = useRef()

   var initialrender = useRef(true)
   //if we want to call api only on initial render
   //means we have to handle different side effects

   //1st paramter of useEffect is function which will be called
   //2nd parameter: dep array: By passing correct value to dependency array
   useEffect(

   
    ()=>{

      if(initialrender.current){
      console.log("It's initial render")

      initialrender.current = false
      }else{
        console.log("message state is changed")
      }
        
      //we want to execute certain code only when state is changed and not on initial render
      //console.log("Message state is changed...")
     //api call
    }, [message] //it will be added in initial render
   )
  return (
    <div>
        <h1>{message}</h1>
        {/* <input type= "text"/><br/> */}

        <input type="text"  ref={inputRef}/>

        <button onClick = {()=>{
            setMessage(inputRef.current.value)
        }}>Submit</button>
    </div>
  )
}
