import React, { useState } from 'react'
import CTitle from './CTitle'

export default function PHeader() {

    let[title, setTitle] = useState("This is component communication")

  return (
    
    <CTitle title={title} changetitle = {setTitle}></CTitle>
  )
}
