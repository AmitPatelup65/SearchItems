import React, { useContext } from 'react'
import { Context } from './Context/ContextApi'
import Home from './Component/Home'

function App() {
  const { data,getdata,setdata } = useContext(Context)
console.log(data,'app.jsx')
  return (
   <>
   <Home></Home>
   </>
  )
}

export default App