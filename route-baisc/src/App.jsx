import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'

import { Suspense, lazy } from 'react';

  const Home=lazy(()=>import('./pages/home'));
  const About=lazy(()=>import('./pages/about'));
  const Contact=lazy(()=>import('./pages/contact'));
function App(){


  return(
    <div>


      <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        
    <nav>
     <Link to="/Home">Home</Link>
     <Link to="/About">AboutS</Link>
     <Link to="/Contact">Contact</Link>
    </nav>



        <Routes>

        <Route path='/Home'element={<Home />} ></Route>
      <Route pathK='/Contact'element={<Contact />} ></Route>

        </Routes>
      </Suspense>
      
      </BrowserRouter>
    </div>
  );
}
export default App;
