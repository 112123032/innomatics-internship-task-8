import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentContext from './StudentContext';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <br></br>
      <label>Name of the student:</label>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br></br><br></br>
      <label>E-mail ID of the Student:</label>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br></br><br></br>
      <label>Age of the student:</label>
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required /><br></br><br></br>
      <label>Class of the student:</label>
      <input type="text" name="class" placeholder="Class" onChange={handleChange} required /><br></br><br></br>
      <label>Address of the student:</label>
      <textarea name="address" placeholder="Address" onChange={handleChange} required></textarea><br></br><br></br>
      <label>Phone Number of the student:</label>
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required /><br></br><br></br>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentForm;
