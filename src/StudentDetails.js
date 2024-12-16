import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StudentContext from './StudentContext';

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find((s) => s.id === parseInt(id));

  return student ? (
    <div className="student-details">
      <h2>{student.name}</h2>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  ) : (
    <p>Student not found</p>
  );
};

export default StudentDetails;
