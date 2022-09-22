import React, { useState } from 'react'
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <>
      <Navbar openNav={openNav} setOpenNav={setOpenNav}/>
      <MobileNav openNav={openNav}/>
      <Home />
      <Footer />
    </>
  );
}

export default App;
