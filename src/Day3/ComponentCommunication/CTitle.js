import React, { useRef } from 'react'

export default function CTitle(props) {


  var inputRef= useRef()

  return (
    <div>
        <h1>{props.title}</h1>
        <input type='text' ref={inputRef}/><br/>

        <button onClick = {
          ()=>{
            var newTitleValue = inputRef.current.value
            //we have to pass newtitlevalue to it's parent
                 
            props.changetitle(newTitleValue)
          }
        }>Change title</button>
    </div>
  )
}
