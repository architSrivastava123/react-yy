import React from 'react'
import Navbar from './Navbar'
import Page1Content1 from './Page1Content1'



const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content1 users={props.users} />

    </div>
  )
}

export default Section1
