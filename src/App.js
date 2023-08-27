// AttendanceApp.js
import React, { useState } from 'react';
import './App.css';

function AttendanceApp() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', attendance: false },
    { id: 2, name: 'Student 2', attendance: false },
    // Add more students here
  ]);

  const markAttendance = (studentId) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, attendance: true } : student
    );
    setStudents(updatedStudents);
  };

  const attendedCount = students.filter((student) => student.attendance).length;

  return (
    <div className="attendance-app">
      <h1>Class Attendance System</h1>
      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {students.map((student) => (
            <li
              key={student.id}
              className={`student-item ${student.attendance ? 'attended' : ''}`}
            >
              {student.name}
              {!student.attendance && (
                <button onClick={() => markAttendance(student.id)}>Mark Attendance</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="attendance-record">
        <h2>Attendance Record</h2>
        <p>Total Students: {students.length}</p>
        <p>Attended: {attendedCount}</p>
      </div>
    </div>
  );
}

export default AttendanceApp;

