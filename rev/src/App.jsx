import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Simpleform(){
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [count, setcount] = useState(0);

return(
  
  <div>



    <form method='POST' onSubmit={()=>{
      if(name.length<3){
        alert("Name shuld be greater than 3 character");
      }
      else{
        alert(`form submmite success ${name} and ${email}`);
      }
    }}>

      <input type="text" name='name' placeholder='enter the name' id='name' onChange={(e)=>{
        setname(e.target.value);
      }}/>
      <br />
      <input type="email" name='email' placeholder='enter the email' id='em' onChange={(e)=>{
        setemail(e.target.value);
      }}/>

      <p>your name : {name} : {email}</p>
      <button type='submit' >submit</button>
    </form>
    <h4>Conter bana rahe hai</h4>
    <p>count: {count}</p>
    <button onClick={()=>{
      setcount(count+1);
    }}>increment</button>
  </div>
);
};
// function Head(){
//   return(
//     <div>
//       <h4>This is my header part 1</h4>
//       <p>abb kuch naya aane wala</p>
//     </div>
//   );
// }
// function Foot(){
//   return(
//     <div>
//       <p>thnaks for registration</p>
//     </div>
//   );
// }
// function App(){
//   return (
    
//     <div>
//       <Head />
//       <h1>this is the para one</h1>
//       <Foot />
//     </div>
//   );
// }
export default Simpleform
