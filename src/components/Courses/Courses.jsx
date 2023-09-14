import React, { useEffect, useState } from 'react'
import Course from '../Course/Course'
const Courses = () => {
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
          <Course course={course}></Course>
          )
      }
    </div>
  )
}

export default Courses