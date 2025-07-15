import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'

import { useRef } from 'react'


function prev(){
    const [name,setname]=useState(0);
    const prevc=useRef();


    useEffect(()=>{
        prevc.current=name;
    },[name]);
    return(
        <div>
            <p>count: {name}</p>
            <br />
            <p>prevour: {prevc.current}</p>
            <button onClick={()=>{
                setname(name+1);
            }}></button>
        </div>
    );
}
// function focus(){
//     const inputtext=useRef(null);
//     return(
//         <div>
//             <input type="text" name='name' id='name' placeholder='enter the name' ref={inputtext}/>
//             <br />
//             <button onClick={()=>{
//                 inputtext.current.focus();
//             }}>Focus the input</button>
//         </div>
//     );
// }

export default prev;