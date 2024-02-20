// import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'
import Payroll from './components/Payroll'
import Dashboard from './components/Dashboard'
import Clients from './components/Patients'
import Therapists from './components/Therapists'


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
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/patients' element={<Clients />} />
          <Route path='/therapists' element ={<Therapists/>} />
        </Routes>
        <Footer />

      </Router>
    );
  }

 

export default App
