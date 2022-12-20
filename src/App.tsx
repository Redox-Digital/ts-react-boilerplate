import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './elements/MainMenu';
import Footer from './elements/Footer';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
