import React, { useState } from 'react'

export default function ControlledComp() {

    let[textvalue, setTextValue] = useState(123)
  return (
    
    <form>
        <label>Enter FirstName</label>
        <input type="text" value={textvalue} onChange={(e)=>{

            //conditionally  we can call setTextValue
            //if data is not valid we will not call setTextValue

            if(!isNaN(e.target.value))
                     setTextValue(e.target.value)
        }}/>

        <button>Submit</button>
    </form>
  )
}
