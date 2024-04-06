import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopSection from './components/TopSection';
import NavigationBar from './components/NavBar';
import Homepage from './components/Homepage'; // Import Homepage here
import Services from './components/services';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="App">
        <TopSection />
        <header className="App-header">
          <NavigationBar />
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
