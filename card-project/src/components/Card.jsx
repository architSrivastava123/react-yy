import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <div>
      <div className="Card">
        <div className='top'>
          <img src={props.brand_logo} />
          <button>Save <Bookmark /></button>
          </div>
          <div className='center'>
            <div className='company'>
              <h3>{props.company_name}</h3> <span> 5 Days ago</span>
            </div>
            <h2> {props.post}</h2>
            <div className='tags'> 
              <h4> {props.tag}</h4>
              <h4> {props.tag2}</h4>
            </div>
          </div>  
        <div className='bottom'>
          <div>
            <h3>{props.pay} </h3>
             <p>{props.location}</p>
          </div>
            <button>Apply Now</button> 
        </div>
      </div>
    </div>
  )
}

export default Card
