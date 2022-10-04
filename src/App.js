import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom'


function App() {
  const [openNav, setOpenNav] = useState(false);
  const { authIsReady, user } = useAuthContext()
  
  return (
    <>
     { authIsReady && (
       <Router>
       <ScrollToTop>
           <Navbar openNav={openNav} setOpenNav={setOpenNav} />
           <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/signup' element={user ? <Navigate to='/' /> : <SignUp />} />
             <Route path='/signin' element={user ? <Navigate to='/' /> : <SignIn />} />
             <Route path='*' element={<Navigate to='/' />} />
           </Routes>   
           <Footer />
       </ScrollToTop>
       </Router>
     )}
    </>
  );
}

export default App;
