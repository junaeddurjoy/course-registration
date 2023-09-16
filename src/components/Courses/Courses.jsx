import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
import PropTypes from 'prop-types';

const Courses = ({addthisCourse}) => {
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
          <Course key={course.id} course={course} addthisCourse = {addthisCourse}></Course>
          )
      }
    </div>
  )
};

Courses.propTypes = {
  addthisCourse: PropTypes.func
}

export default Courses