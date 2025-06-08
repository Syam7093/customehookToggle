import React from 'react'
import useIncrement from '../useIncrement'

const IncrementComponent = () => {
    const {inc,dec,increment}=useIncrement(0)
    console.log(increment,"sdfsf")
  return (
    <div>
        <button onClick={()=>{inc()}}>{increment}</button>
        <button onClick={()=>{dec()}}>{increment}</button>

    </div>
  )
}

export default IncrementComponent