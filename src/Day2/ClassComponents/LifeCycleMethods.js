import React, { Component, createRef } from 'react'

export default class LifeCycleMethods extends Component {

    constructor(){


        console.log("Constructor is called.....")


        super()//call parent's constructor

        this.state = {
            message : "Welcome to Persistent",
            counter: 0
        }


        this.inputRef = createRef()
    }

    render() {
        console.log("render is called")
        return (
          <div>
          <h1> {this.state.message}</h1>
          <input type="text" ref={this.inputRef}/><br/>
          {/* In case of arrow function */}
          {/* <button onClick={this.changeMessage}>Change Message</button> */}
          {/* In case of normal function */}
          <button onClick={()=>{
            this.setState({message:this.inputRef.current.value})
          }}>Change Message</button>
          </div>
        )
      }


      componentDidMount(){
        console.log("Component did mount is calld...")
      }

      shouldComponentUpdate(){
        
      }
}
