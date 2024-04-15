import React from 'react'

export default function BootstrapStyling() {
  return (
    <div>
        <p className='text-danger'>This is an error!!</p>
        <p className='text-warning'>This is a warning!!</p>
        <p className='text-success'>This is a success!!</p>
        

        <div>
            <button className='btn  btn-primary'>Primary</button>
            <button className='btn  btn-success'>Success</button>
        </div>

    </div>
  )
}
