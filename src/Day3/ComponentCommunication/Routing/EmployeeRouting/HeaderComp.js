import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'

export default function HeaderComp1() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/employees">Employee List</Link>
            </li>
        </ul>


        <Routes>

            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="/employees" element={<EmployeeList/>}></Route>

        </Routes>
    </div>
  )
}


function HomeComp() {
  return (
    <div>Welcome to Employee Management!!</div>

  )
}

