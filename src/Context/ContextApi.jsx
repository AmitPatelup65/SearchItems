import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const Context=createContext()
function ContextApi({children}) {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState("")
    const [sort, setsort] = useState([])
    const getdata=async()=>{
        const res=await axios.get('https://dummyjson.com/products')
        setdata(res.data.products)
    }
    useEffect(()=>{
        getdata()
    },[]);

  return (
    <Context.Provider value={{data,getdata,setdata}}>
      {children}
    </Context.Provider>
  )
}

export default ContextApi