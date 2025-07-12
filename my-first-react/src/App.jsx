import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
  return (
    <div className='cards'>
      <h2>{title} is the card </h2>
    </div>
  );
};
const Welcome = () =>{
  return (
    <div className='card-container'>
      <h1>There are many card here you will see</h1>
      <Card title="star wars"/>
      <Card  title="stranger thing"/>
      <Card  title="wednesday"/>

    </div>
  );
};

export default Welcome;
