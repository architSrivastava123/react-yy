import React from 'react'
import Rightcards from './Rightcards'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3  flex- rounded-4xl overflow-x-auto flex flex-nowrap gap-10'  >
     {props.users.map(function(elem){
        return <Rightcards img={elem.img} intro={elem.intro} tag={elem.tag} index={elem.index} />
     })}
    </div>
  )
}

export default Rightcontent
