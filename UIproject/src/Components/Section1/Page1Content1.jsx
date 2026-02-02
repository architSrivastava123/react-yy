import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1Content1 = (props) => {
  return (
    <div className='h-[90vh] flex items-center gap-10  px-18 pb-16 pt-6  ' >
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1Content1
