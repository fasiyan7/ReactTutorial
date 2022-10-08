import React ,{ useState,useEffect } from 'react'

function Counter() {
  useEffect(()=>{
    console.log("Mounting---")
    return()=>
      {
        console.log("unMounting---")

      }
    
  })
  const [count,setCount]=useState(0)
  const [count1,setCount1]=useState(0)

  
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>Increment</button>    <h1> {count}</h1>
&nbsp;
      <button onClick={()=>setCount1(count1+1)}>Increment</button>    <h1> {count1}</h1>



    </div>
 );
}

export default Counter