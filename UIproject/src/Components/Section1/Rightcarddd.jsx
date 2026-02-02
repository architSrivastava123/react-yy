import React from 'react'

const Rightcarddd = (props) => {
  return (
    <div>
      <div className=' absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
                   <h2 className='bg-white font-semibold rounded-full h-12 w-12 flex justify-center text-xl  items-center '>{props.index}</h2>
                   <div className='  '>
                        <p className='text-white  text-xl leading-relaxed mb-10'> {props.intro}</p>
                        <div className=' flex  justify-between '>
                            <button className=' bg-blue-700 text-white px-8 py-2 rounded-full '> {props.tag} </button>
                        </div>
                    </div>
                 </div>     
    </div>
  )
}

export default Rightcarddd
