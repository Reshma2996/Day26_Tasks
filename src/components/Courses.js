import React from 'react';
import './Courses.css';

const coursesData = {
  'all': [
    { title: 'Full-Stack-Development', image: 'https://via.placeholder.com/300x200?text=Full+Stack+Development' },
    { title: 'Data-Science', image: 'https://via.placeholder.com/300x200?text=Data+Science' },
    { title: 'Cyber Security', image: 'https://via.placeholder.com/300x200?text=Cyber+Security' }
  ],
  'full-stack-development': [
    // Add full stack development courses here
  ],
  'data-science': [
    // Add data science courses here
  ],
  'cyber-security': [
    // Add cyber security courses here
  ],
  'career': [
    // Add career courses here
  ]
};

function Courses({ category }) {
  const courses = coursesData[category] || [];

  return (
    <div className="courses">
      {courses.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h3>{course.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Courses;
