import { useContext } from "react";
import React from "react";


function Box({children}){
    return(
        <div style={{
            border: '2px solid blue',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: '#232424ff'}}>

        {children}
      </div>
    );
}
function App(){
    return(
        <div>
            <h1>Helloo</h1>



            <Box> <h2>This is the tushar</h2></Box>
            <Box> <h2>This is the john</h2></Box>
            <Box> <h2>This is the adam</h2></Box>
        </div>


    );
}
export default App;

