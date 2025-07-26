import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function simpleform(){
const [name,setname]=useState('');  // it is used to store the value
const [email,setemail]=useState('');
return (
  <form onSubmit={(e)=>{
    if(name.length<3){
      alert("should be gretaer then 3");
    }
    else{
      alert(`form submiteed thank you ${name} ${email}`);
    }
  }}>
    <h4>Enter the your name </h4>
    <input type="text" name="name" id="inp" value={name} onChange={(e)=>{
      setname(e.target.value)
    }}/>
     <br />
    <input type="text" name='email' id='em' value={email} onChange={(e)=>{
      setemail(e.target.value);
    }}/>
   
    <p>Your input is displayed here: {name} : {email}</p>
    <button type="submit">Submit</button>
  </form>
)
};
export default simpleform
