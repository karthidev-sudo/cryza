import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // <--- Import this

import SmoothScroll from './components/SmoothScroll.jsx';
import AuroraBackground from './components/AuroraBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PageTransition from './components/PageTransition.jsx'; // <--- Import the wrapper

import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  const location = useLocation(); // Required for AnimatePresence to track page changes

  return (
    <SmoothScroll>
      <AuroraBackground />
      <Navbar />

      {/* mode="wait" ensures the old page fades out BEFORE the new one fades in */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route path='/' element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />

          <Route path='/services' element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } />

          <Route path='/work' element={
            <PageTransition>
              <WorkPage />
            </PageTransition>
          } />

          <Route path='/about' element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } />

          <Route path='/contact' element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />

        </Routes>
      </AnimatePresence>
      
      <Footer />
    </SmoothScroll>
  );
};

export default App;