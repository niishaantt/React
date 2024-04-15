import React, { useRef, useState } from 'react'

export default function MessageComponent(props) {

    //var message = "Welcome to Persistent!!"

    let[message, setMessage] = useState("Welcome to PSL!!!")

    //let[emp, setemp] = useState(props.user)
    //empid:10, empName:"Nishant", empAddress:"Pune"

    var messageRef = useRef()

    //In case of functional component to define state we will use hook 'useState' 

    function ChangeMessage(){

        
        //message = "Message is changed!..."
        //console.log("Change Message...." + message)
        // var message = document.getElementById("text1").value
        // setMessage(message)

        setMessage(messageRef.current.value)

    }

  return (
    <div>

      {/* <div>
        <h1>Employee Details</h1>
        <p>{emp.userName}</p>
        <p>{emp.userId}</p>
        <p>{emp.city}</p>
      </div> */}
        
        <h1>{message}</h1>
        
        <input type='text' ref={messageRef}></input>
        <button onClick={ChangeMessage}>Change Message</button>
        {/* <button onClick={ChangeMessage}>Change Message</button>

        {/* <button onClick={()=>{
          setMessage("Message is changed.....")
        }}>Change Message</button> */}
    </div>
  )
}
