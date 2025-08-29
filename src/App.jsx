
import './App.css'
import {  Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';
import DetailFilm from './components/DetailFilm';


function App() {


  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id" element={<DetailFilm />} />
        </Routes>
      </div>
    </>
  )
}

export default App
