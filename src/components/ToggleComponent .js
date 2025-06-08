import React from 'react'
import useToggle from '../useToggle'

const ToggleComponent  = () => {
    const [visible,setVisible]=useToggle()
    console.log(visible,"sdfsdfs")
  return (
    <div>
        <button onClick={setVisible}>{visible?"hide":"show"}message</button>
        {visible&&<h1>this is toggle message</h1>}
    </div>
  )
}

export default ToggleComponent 