    import React, { useEffect, useState } from 'react'
    import axios from 'axios'


    const App = () => {

      const [data, setData] = useState([])
      const [index, setindex] = useState(1)

      const getData = async()=>{
        const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
        console.log(res.data)
        setData(res.data)
      }

      useEffect( function() {
        getData()
      }, [index])

      
      let printuserdata= "data is empty"
      
      if(data.length>0){
        printuserdata = data.map((elem) => (
          <div key={elem.id} className='mb-3 rounded-3xl bg-zinc-900 p-3'>
            <a href={elem.url} target='_blank' rel='noreferrer'>
              <img src={elem.download_url} alt={elem.author} className='mt-2 h-45 w-45 rounded object-cover' />
              <h2 className='text-lg font-bold'>{elem.author}</h2>
            </a>
          </div>
        ))
      }
      

      return (
        <div className='h-screen w-full bg-black text-white overflow-auto'>
          
          
          <div className='flex flex-wrap gap-10 ml-10 mt-2'>
            {printuserdata}
          </div>

          <div className='flex justify-center gap-5 mt-2 '>
            <button className='bg-amber-300 text-sm font-serif rounded px-5 py-2' onClick={ () => {if(index>1) {setindex(index-1)}}}> Prev</button>
            <h3 className='text-xl'>Page {index}</h3>
            <button className='bg-amber-300 text-sm font-serif rounded px-5 py-2' onClick={() => setindex(index+1)}> Next</button>
          </div>
        </div>
      )
    }

    export default App
