import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setdata] = useState([])
    const [search, setsearch] = useState("")
    const [sort, setsort] = useState([])
  const getdata=async()=>{
    const res=await axios.get('https://fakestoreapi.com/products')
    setdata(res.data)
    // console.log(data)
  }
  useEffect(()=>{
    getdata()
  },[])
  const handle=()=> {
     let x=data.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
     setsort(x)
    
  }
  console.log(search)
  return (
    <div className='p-5'>
        <input className='border-3 ' type="text" placeholder='search'
        value={search}
        onChange={(e)=> setsearch(e.target.value) }
       
         />
         <button onClick={()=>handle()} className='border-3 active:scale-90 ml-2 rounded-md'>Search</button>
         { console.log(sort)}
    </div>
  )
}

export default Home