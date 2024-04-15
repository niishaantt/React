import React, { Component, createRef } from 'react'

export default class ClassState extends Component {

    //In Js all class members will be defined inside constructor
    constructor(){


        super()//call parent's constructor

        this.state = {
            message : "Welcome to Persistent",
            counter: 0
        }


        this.inputRef = createRef()
    }

    changeMessage(){
        //In normal function component, it does not retain the component of this
        //console.log(this)
        this.setState(
                   {message:this.inputRef.current.value}
                )
    }
    
    // In case of arrow function, the context of this is retained
    // changeMessage = ()=>{
    //     //console.log("changeMessage is called.")
    //     //we have to change the state

    //     this.setState(
    //         {message:"New Message"}
    //     )
    // }


  render() {
    return (
      <div>
      <h1> {this.state.message}</h1>
      <input type="text" ref={this.inputRef}/><br/>
      {/* In case of arrow function */}
      {/* <button onClick={this.changeMessage}>Change Message</button> */}
      {/* In case of normal function */}
      <button onClick={this.changeMessage.bind(this)}>Change Message</button>
      </div>
    )
  }

  
}
