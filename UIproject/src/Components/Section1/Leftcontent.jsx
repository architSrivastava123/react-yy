import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Leftcontent = () => {
  return (
    <div className='h-[90vh] flex flex-col w-1/3'>
      <div>
        <h3 className='text-6xl font-bold py-5 px-2'> Prospective <br/> Customer <br/> Segmentation</h3>
        <p className='text-lg py-10  px-2 text-gray-400 font-bold'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae autem magnam minima reiciendis labore aut nobis aperiam iusto, quia incidunt.</p>
      </div>
      <div className=' m-5  py-35 ' >
          <ArrowUpRight size={100} />
      </div>
        
    </div>
  )
}

export default Leftcontent
