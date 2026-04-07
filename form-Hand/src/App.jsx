import React from 'react'
import { useState } from 'react';

const App = () => {

  const[name , setname] = useState('')

  function handleChange(e){
    e.preventDefault();
    console.log(name)
    console.log('form sumbitted by ' , name);
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        handleChange(e)
      }}>
        <input type="text"  placeholder='Enter Your Name'
        value = {name} 
        onChange={(e)=>{
          setname(e.target.value)
        }}/>

      < button  >Submit</button>
      </form>
    </div>
  )
}

export default App
