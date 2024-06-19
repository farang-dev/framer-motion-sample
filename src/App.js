// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
