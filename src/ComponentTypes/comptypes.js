import React from "react"
export function HelloWorldFunction(){

    return <h1>Hello World from Functional Comp!!</h1>

}



export default class HelloWorldClass extends React.Component{

    render(){
        return <div>This is class component!!</div>
    }

}