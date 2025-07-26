import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home  from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'


function App(){
  return(
    <div>



      <BrowserRouter>

    <nav>
     <Link to="/Home">Home</Link>
     <Link to="/About">AboutS</Link>
     <Link to="/Contact">Contact</Link>
    </nav>



        <Routes>

        <Route path='/Home'element={<Home />} ></Route>
      <Route path='/About'element={<About />} ></Route>
      <Route path='/Contact'element={<Contact />} ></Route>

        </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}
export default App;
