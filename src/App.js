import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <>
      <Router>
      <ScrollToTop>
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Home />} />
      </Routes>   
      <Footer />
      </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
