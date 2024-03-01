import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; // Adjust the import path as needed
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
// import NewGuests from './components/NewGuests';
import BookNow from './components/BookNow';
import Hair from './components/services/Hair';
import Styles from './components/services/hair/Styles';
import Highlights from './components/services/hair/Highlights';
import Haircuts from './components/services/hair/Haircuts'
import Eyelashes from './components/services/Eyelashes'
import Color from './components/services/hair/Color'
import Treatments from './components/services/hair/Treatments'
import Extensions from './components/services/eyelashes/Extensions'
import Login from './components/auth/Login'
import Policies from './components/Policies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css"


function App() {
  return (
    <div className="bg-white text-gray-800">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="services" element={<Services />} />
            <Route path="services/hair" element={<Hair />} />
              <Route path="services/hair/color" element={<Color />} />
              <Route path="services/hair/haircuts" element={<Haircuts />} />
              <Route path="services/hair/highlights" element={<Highlights />} />
              <Route path="services/hair/styles" element={<Styles />} />
              <Route path="services/hair/treatments" element={<Treatments />} />
            <Route path="services/eyelashes" element={<Eyelashes />} />
              <Route path="services#/eyelashes/extensions" element={<Extensions />} />
          {/* <Route path="new-guests" element={<NewGuests />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="policies" element={<Policies />} />
          <Route path="booknow" element={<BookNow />} />
          <Route path="login" element={<Login />} />
        </Routes> 
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
