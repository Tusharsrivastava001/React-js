import { useState,useEffect } from "react";
import axios from 'axios';

function App(){
    const [data,setdata]=useState(null);
    const [loading,setloading]=useState(null);
    const [error,seterror]=useState(null);

    useState(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            if(!res.ok) throw new Error("Network aaya");
            return res.json();
        })
        .then((data)=>{
            setdata(data);
            setloading(false);
        })
        .catch((err)=>{
            seterror(err.message);
             setloading(false);
        });


    },[]);


    return(
        <div>
        <h1>Post: </h1>
        {data ? data.map((items)=><p key={items.id}>  {items.title}</p>) //here we are using becauus it will iterta though the each elements
        
        : <p>Loading.....</p>}
        </div>
    );
}
export default App;