import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
//basic of react useeffect
//mount what we see first on the screen


// function mycomponent(){

//   useEffect(()=>{
//     console.log("compnet rendered or updated");

//     return () =>{
//       console.log("cleanup before next effect");
//     }
//   },[]);

//   return(
//     <div>
//       <p>Hello from the</p>
//     </div>
//   )
// }

// function counter(){
//   const [count,setcount]=useState(0);

//   useEffect(()=>{
//     console.log("update hua");

//     return()=>{
//         console.log("CLEAN");
//     }
//   },[count]); 


//   // useEffect(()=>{
//   //   const timer=setInterval(()=>{
//   //     console.log("running");
//   //   },10000);

//   //   return()=>{
//   //     clearInterval(timer);
//   //     console.log("cleaned");
//   //   }
//   // },[count]);
//   return(
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={(e)=>setcount(count+1)}>click me</button>
//     </div>
//   );
// }

import { useRef } from "react";

function App() {
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current += 1;
    console.log("Clicked", clickCount.current);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
function Appi(){
  const inpu=useRef();
  return(
    <div>
      <input type="text" name='name' id='name' ref={inpu}/>
      <button onClick={()=>{inpu.current.focus()}}>Click</button>
    </div>
  );
}
export default Appi;

// export default counter;