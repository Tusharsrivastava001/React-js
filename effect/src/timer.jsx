import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'

import { useRef } from 'react'

function TIME(){
    const [count,setcount]=useState(0);

    const intervalref=useRef();

    useEffect(()=>{
        intervalref.current=setInterval(()=>{
            setcount((prev)=>prev+1)
        },1000);


        return ()=> clearInterval(intervalref.current);
    },[]);
    return (
        <div>
            <p>count: {count}</p>
        <button onClick={()=>clearInterval(intervalref.current)}>Stop</button>
        </div>
    );
}



export default TIME;