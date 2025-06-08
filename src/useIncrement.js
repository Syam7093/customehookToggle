import { useState } from "react"

const useIncrement=(initialValue=0)=>{
    const[increment,setincrement]=useState(initialValue)
    const inc=()=>{
        setincrement((prev)=>prev+1)
    }
    const dec=()=>{
        setincrement((prev)=>prev-1)
    }

    return{inc,dec,increment}

}

export default useIncrement