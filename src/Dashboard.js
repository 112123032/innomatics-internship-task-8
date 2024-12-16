import React, { useContext } from 'react';
import StudentContext from './StudentContext';

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Total Students: {students.length}</p>
    </div>
  );
};

export default Dashboard;
