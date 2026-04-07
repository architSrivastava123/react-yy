import React from 'react'

const App = () => {
  const sumbithandler=(e)=>{
    e.preventDefault();
    console.log("form submitted");
    
  }

  
  return (
    <div className='h-screen bg-black text-white'> 
      <form className='flex gap-4 justify-between items-start flex-col p-10' onSubmit={(e)=>{
        sumbithandler(e)
      }}>
        <h1 className=' text-3xl font-bold  '> 
          Add Your Note
        </h1>
        <input type="text" placeholder="Enter your note Heading..." 
        className='px-5 w-full border-2 py-2 font-medium outline-none rounded'/>
        <br />
        <textarea placeholder="Enter your note details..." 
        className='px-5 w-full border-2 py-2 items-start flex-row h-32  font-medium outline-none rounded'/>
        <br />
        <button 
        className='px-5 w-full border-2 py-2 font-medium outline-none rounded bg-white text-black' type="submit">Add Note</button>
      </form>
    </div>
  )
}

export default App
