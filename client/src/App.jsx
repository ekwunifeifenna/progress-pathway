import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    );
  }

 

export default App
