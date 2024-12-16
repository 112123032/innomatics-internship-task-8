import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Student Management Portal</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/add-student">Add Student</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
