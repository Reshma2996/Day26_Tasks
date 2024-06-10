import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Courses from './components/Courses';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Courses category="all" />} />
          <Route path="/full-stack-development" element={<Courses category="full-stack-development" />} />
          <Route path="/data-science" element={<Courses category="data-science" />} />
          <Route path="/cyber-security" element={<Courses category="cyber-security" />} />
          <Route path="/career" element={<Courses category="career" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
