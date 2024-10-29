// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Details from './pages/Details/Details';
import './styles/global.css';

function App() {
  const [items, setItems] = useState([]); // Estado para almacenar preguntas

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home setItems={setItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details items={items} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
