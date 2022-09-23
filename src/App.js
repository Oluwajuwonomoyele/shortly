import React, { useState } from 'react'
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <>
      <Navbar openNav={openNav} setOpenNav={setOpenNav}/>
      <Router>
      <ScrollToTop>
      <MobileNav openNav={openNav}/>
      <Home />
      </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
}

export default App;
