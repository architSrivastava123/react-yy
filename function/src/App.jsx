import React from 'react'

const App = () => {
  function ischanging(elem){
    console.log(elem.target.value)
  }
  return (
    <div>
      <input onChange={function(elem){
        ischanging(elem)
      }} type="text" placeholder="Enter text here" />
    </div>
  )
}

export default App
