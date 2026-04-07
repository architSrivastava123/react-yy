    import React from 'react'
import Rightcarddd from './Rightcarddd'

    const Rightcards = (props) => {
    return (
        <div className='  h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover ' src={props.img} alt=''/>
             <Rightcarddd intro={props.intro} tag={props.tag} index={props.index} />  
        </div>
    
        
    )
    }

    export default Rightcards
