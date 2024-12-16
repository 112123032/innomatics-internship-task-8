import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './StudentContext';

import StudentList from './StudentList';
import StudentForm from './StudentForm';
import StudentDetails from './StudentDetails';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import './App.css'

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;

