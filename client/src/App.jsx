// import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Payroll from './components/Payroll'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {

    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payroll' element={<Payroll />} />
        </Routes>
        <Footer />

      </Router>
    );
  }

 

export default App
