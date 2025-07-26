import React, { createContext, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useContext } from 'react';


const usercontext=createContext();
function App(){

    return(
        <div>
            <usercontext.Provider value="john">
                <Suno />
                <Parent />
                
            </usercontext.Provider>
        </div>
    );
}
function Suno(){
    return <h1>hello</h1>
}
function Parent(){

    return (
        <div>
            <h3>Hello broo from teh parent</h3>
            <Child />
        </div>
    );
}
function Child(){
    return (
        <div>
            <h3>Hello broo from teh child</h3>
            <GrandChild />
        </div>
    );
}
function GrandChild(){
    const user=useContext(usercontext); //here we are accesign the context
    return(
        <div>
            <h1>HELLO : {user}</h1>
        </div>
    );
}
export default App;