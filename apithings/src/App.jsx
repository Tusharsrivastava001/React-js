import { useState, useEffect } from "react";
function App(){
const [data,setdata]=useState(null);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  //here ham data api se laye 
  .then((res)=>res.json())
  //uskoo valid format me convert kiye
  .then((data)=>setdata(data));
  //then we store into the data

},[]);
  return(
    <div>
        <h1>Post: </h1>
        {data ? data.map((items)=><p> {items.id} {items.title}</p>) //here we are using becauus it will iterta though the each elements
        : <p>Loading </p>}
    </div>
  );
}
export default App;