import { useCallback, useState } from 'react';
import { memo } from 'react';
const Child=memo(({name})=>{ //yaha par bar bar rendered nah ho toh use karenge without this bar bar console me print hoga joki perfamance reduce karega
    console.log("rendered");
    return(
        <div>
            <p>Child : {name}</p>
        </div>
    )
});
function Parent(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <Child name="john"/>
        </div>
    );
}







const Childo=memo(({onClick})=>{
    console.log("Hello bro ");
    return <button onClick={onClick}></button>
})

export default function Callbackka(){
    const [c,setc]=useState(0);

    return(
        <div>
            <p>count: {c}</p>
            <button onClick={()=>{
                setc(c+1);
            }}>Click karo</button>

            <Childo onClick={useCallback(()=>{console.log("clicked");},[])} />
        </div>
    );
};