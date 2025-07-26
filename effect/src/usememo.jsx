import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'

import { useRef } from 'react'
function example(){
    const [c,setc]=useState(0);
    const [inpu,setinpt]=useState('');
    const e=()=>{
        console.log("helloo fro");
        let res=0;
        for(let i=0;i<25;i++){
            res+=i;
        }
        return res;
    };
    const slowResult=useMemo(()=>e(),[]);
    return(
        <div>
        <input type="text" placeholder='enter the name' value={inpu} onChange={(e)=>{setinpt(e.target.value)}}/>
        <br />
        <p>Typed input: {inpu}</p>
         <button onClick={()=>{
                setc(c+1);
            }}>Click</button>

        <h3>Slow result: {slowResult}</h3>
        </div>
    );
}
function app(){
    const [count,setcount]=useState(0);
    
    const val=(()=>{
        console.log("Hello bro the console every render");
        let res=0;
        for(let i=0;i<10;i++){
            res+=i;
        }
        return res;
    });

    const v=useMemo(()=>val(),[]);
    return(
        <div>

           
            <p>Connt: {count}</p>
            <button onClick={()=>{
                setcount(count+1);
            }}>Click</button>
            <p>Expensie value: {v}</p>

        </div>
    )
}
export default example;
