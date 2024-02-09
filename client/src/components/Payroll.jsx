import React, { useState } from 'react';
import axios from 'axios';

const Payroll = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [status, setStatus] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [totalPay, setTotalPay] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/payroll', {
        employeeId,
        amount,
        date,
        hoursWorked,
        status,
        hourlyRate,
        totalPay,
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle the error as needed
    }
  };

  return (
    <div>
      <h1>Payroll Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hours Worked:
          <input
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hourly Rate:
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Total Pay:
          <input
            type="number"
            value={totalPay}
            onChange={(e) => setTotalPay(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Payroll;
