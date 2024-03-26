import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import './App.css';

function App() {
    return (
      <Router>
      <div className="App">
        <Header />
         <Routes>
            <Route path="/" element={<><About /><Services /></>} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
    );
}

export default App;

