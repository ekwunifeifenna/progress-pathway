import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../style/patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phoneNumber: '',
    medicalHistory: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/api/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error(`There was an error retrieving the data: ${error}`);
      });
  }, []);

  const addPatient = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/patients', newPatient)
      .then(response => {
        setPatients([...patients, response.data]);
        setNewPatient({
          firstName: '',
          lastName: '',
          dob: '',
          email: '',
          phoneNumber: '',
          medicalHistory: ''
        });
        setShowForm(false);
      })
      .catch(error => {
        console.error(`There was an error creating the data: ${error}`);
      });
  };

  const handleInputChange = (event) => {
    setNewPatient({ ...newPatient, [event.target.name]: event.target.value });
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <h1>Patients</h1>
        {/* Display patients or prompt to add patient */}
        {patients.length > 0 ? (
          patients.map((patient, index) => (
            <div key={index} className="patient">
              <h2>{patient.firstName} {patient.lastName}</h2>
              <p>Date of Birth: {patient.dob}</p>
              <p>Email: {patient.email}</p>
              <p>Phone Number: {patient.phoneNumber}</p>
              <p>Medical History: {patient.medicalHistory}</p>
            </div>
          ))
        ) : (
          <p>No patients found. Please add a patient.</p>
        )}
        {/* Add new patient */}
        <button onClick={() => setShowForm(!showForm)}>Add Patient</button>
        {showForm && (
          <div className="new-patient">
            <form onSubmit={addPatient}>
              <input name="firstName" value={newPatient.firstName} onChange={handleInputChange} placeholder="First Name" required />
              <input name="lastName" value={newPatient.lastName} onChange={handleInputChange} placeholder="Last Name" required />
              <input name="dob" value={newPatient.dob} onChange={handleInputChange} placeholder="Date of Birth" required />
              <input name="email" value={newPatient.email} onChange={handleInputChange} placeholder="Email" required />
              <input name="phoneNumber" value={newPatient.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
              <input name="medicalHistory" value={newPatient.medicalHistory} onChange={handleInputChange} placeholder="Medical History" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Patients;