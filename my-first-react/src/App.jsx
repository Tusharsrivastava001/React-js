import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
//class component

// function App(){
//   return (
//     <div>
//       <h1>Hello, Tushar! Kya kar rahe ho</h1>
//       <p>Welcome to your first React app with Vite.</p>
//     </div>
//   );
// }
// function Header(){
//   return <h1>My first react header</h1>
// }
// function Footer(){
//   return <footer>@2025 ka hai</footer>
// }
// function Welcome(){
//   return (
//     <div>
//         <Header />
//       <p>This is the main content of the page</p>
//       <Footer />
//     </div>
    
//   );
// }

const Card = ({ title }) => {

   const [hasliked,sethasliked]=useState(false);

   const [count,setCount]=useState(0);


   useEffect(()=>{
    console.log(`${title} has been liked: ${hasliked}`);
   },[hasliked]);
  
   //here hamne liya ja change hooga then useeffect ka use karoo 
   // data ko store karne me upyoog hota hai
  return ( 
    <div className='cards'>
      <h2>{title} is the card - {count ? count : null} </h2>
      <button onClick={()=>sethasliked(!hasliked)}>
        {hasliked ? '❤️': '💌'}
      </button>
      
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
};
const Welcome = () =>{
  //here haslinked is the variable
  return (
    <div className='card-container'>
      <h1>There are many card here you will see</h1>
      <Card title="star wars"/>
      <Card  title="stranger thing"/>
      <Card  title="wednesday"/>

    </div>
  );
};



//counter application
// function Counter(){
//   const [count,setcount]=useState(0);
//   const increament=()=>{
//     setcount(count+1);
//   };

//   return (
//     <div>
//       <p>Here is the counter application</p>
//       <p>count: {count}</p>
//       <button onClick={increament}>click</button>
//     </div>
//   );
// };



export default Welcome;
