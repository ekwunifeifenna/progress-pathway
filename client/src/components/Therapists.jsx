import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../style/therapists.css';

const Therapist = () => {
    const [therapists, setTherapists] = useState([]);
    const [newTherapist, setNewTherapist] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      hoursWorked: ''
    });
    const [showForm, setShowForm] = useState(false);
  
    useEffect(() => {
      axios.get('http://localhost:3001/api/therapists')
        .then(response => {
          setTherapists(response.data);
        })
        .catch(error => {
          console.error(`There was an error retrieving the data: ${error}`);
        });
    }, []);
  
    const addTherapist = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/api/therapists', newTherapist)
        .then(response => {
          setTherapists([...therapists, response.data]);
          setNewTherapist({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            hoursWorked: ''
          });
          setShowForm(false);
        })
        .catch(error => {
          console.error(`There was an error creating the data: ${error}`);
        });
    };
  
    const handleInputChange = (event) => {
      setNewTherapist({ ...newTherapist, [event.target.name]: event.target.value });
    };
  
    return (
      <div className="dashboard">
        <Sidebar />
        <main>
          <h1>Therapists</h1>
          {therapists.length > 0 ? therapists.map((therapist, index) => (
            <div key={index} className="therapist">
              <h2>{therapist.firstName} {therapist.lastName}</h2>
              <p>Email: {therapist.email}</p>
              <p>Phone Number: {therapist.phoneNumber}</p>
              <p>Hours Worked: {therapist.hoursWorked}</p>
            </div>
          )) : <p>No therapists found. Please add one.</p>}
          <button onClick={() => setShowForm(!showForm)}>Add Therapist</button>
          {showForm && (
            <div className="new-therapist">
              <form onSubmit={addTherapist}>
                <input name="firstName" value={newTherapist.firstName} onChange={handleInputChange} placeholder="First Name" required />
                <input name="lastName" value={newTherapist.lastName} onChange={handleInputChange} placeholder="Last Name" required />
                <input name="email" value={newTherapist.email} onChange={handleInputChange} placeholder="Email" required />
                <input name="phoneNumber" value={newTherapist.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
                <input name="hoursWorked" value={newTherapist.hoursWorked} onChange={handleInputChange} placeholder="Hours Worked" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </main>
      </div>
    );
  };
  
  export default Therapist;