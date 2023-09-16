import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
import PropTypes from 'prop-types';

const Courses = ({addthisCourse, addCredits, addTotal}) => {
  const [courses, setCourses] = useState([]);
  useEffect( () => {
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data) )
  },[])
  return (
    <div className='grid grid-cols-3 gap-8 -ml-24'>
      {
        courses.map( course =>
          <Course key={course.id} course={course} addthisCourse= {addthisCourse} addCredits={addCredits} addTotal={addTotal}></Course>
          )
          
      }
    </div>
  )
};

Courses.propTypes = {
  addthisCourse: PropTypes.func,
  addCredits: PropTypes.func,
  addTotal: PropTypes.func
}

export default Courses