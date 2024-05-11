import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

export default function SimpleRouting() {
  return (
    <>
    <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to ="/aboutus">About Us</Link>
            </li>
            <li>
            <Link to="/contactus">Contact us</Link>
            </li>

        </ul>
    </nav>

    <Routes>
      <Route path="/" element={<HomeComp/>}></Route>
      <Route path="/aboutus" element={<AboutUsComp/>}></Route>
      <Route path="/contactus" element={<ContactUsComp/>}></Route>
    </Routes>
    </>
  )
}


function HomeComp(){
  return (
    <div>This is home page!!!</div>
  )
}


function AboutUsComp(){
  return (
    <div>This is About Us Page!!!</div>
  )
}

function ContactUsComp(){
  return (
    <div>This is contact us Page!!!</div>
  )
}
