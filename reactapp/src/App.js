// File: src/App.js
import React, { useState } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  const [view, setView] = useState('list');

  return (
    <div>
      <h1>Course Management System</h1>
      <nav>
        <button data-testid="nav-list" onClick={() => setView('list')}>View Courses</button>
        <button data-testid="nav-add" onClick={() => setView('add')}>Add Course</button>
      </nav>

      {view === 'list' && <CourseList />}
      {view === 'add' && <CourseForm />}
    </div>
  );
}

export default App;