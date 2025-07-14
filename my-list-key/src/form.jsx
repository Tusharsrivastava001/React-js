import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function control(){
    //use state ka use karenge 
    const [name,setName]=useState('');
    return(
        <form onSubmit={(e)=>{
            if(name.length<2){
                alert("error hi");
            }
            else
                {
                    alert(`form submitted with the naem ${name}`);
                }
        }}>
            <div>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                {/* //here e.target.value get the current valeu from the input and display the dynamically */}
                <p>you typed: {name}</p>
            </div>
            <button type="submit">Submit</button>
            
        </form>
    );
}

export default control;
