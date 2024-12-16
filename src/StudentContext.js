import React, { createContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 20, class: '10th', address: '123 Street', phone: '1234567890' },
    // Add more mock data
  ]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents(students.map((s) => (s.id === id ? updatedStudent : s)));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
 