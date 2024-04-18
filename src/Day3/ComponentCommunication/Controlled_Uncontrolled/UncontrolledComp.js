import React from 'react'

export default function UncontrolledComp() {
  return (
    <form>

        <label>Enter FirstName</label>

        <input type="text"/>

        <button onClick={()=>{

            var value = inputRef.current.value
            

        }}>Submit</button>
    </form>
  )
}
