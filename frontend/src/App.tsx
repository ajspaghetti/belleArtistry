import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/ts/Nav'; // Adjust the import path as needed
import Home from './components/ts/Home';
import AboutMe from './components/ts/AboutMe';
import Services from './components/ts/Services';
import BookNow from './components/ts/BookNow';
import Hair from './components/ts/services/Hair';
import Styles from './components/ts/services/hair/Styles';
import Highlights from './components/ts/services/hair/Highlights';
import Haircuts from './components/ts/services/hair/Haircuts'
import Eyelashes from './components/ts/services/Eyelashes'
import Color from './components/ts/services/hair/Color'
import Treatments from './components/ts/services/hair/Treatments'
import Extensions from './components/ts/services/eyelashes/Extensions'
import Login from './components/ts/auth/Login'
import Policies from './components/ts/Policies'
import Contact from './components/ts/Contact'
import Footer from './components/ts/Footer'
import "./App.css"


function App() {
  return (
    <div>
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
