import React from 'react'
import empObj from './empAPI'

export default function EmployeeList() {


    //returning array of employees
    var empList = empObj.getAllEmps()

    return (
        <div>{

            empList.map(emp=>
                
                    <p>{emp.empName}</p>
                
            )
        }
    </div>
    )
}
