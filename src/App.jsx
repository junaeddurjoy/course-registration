import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import { useState } from 'react'

function App() {
  const [credits, setCredits] = useState([]);

  const addthisCourse = course =>{
    const newCourse = [...credits, course];
    setCredits(newCourse);
  }
  return (
    <>
      <Header></Header>
      <div className='flex justify-around gap-6'>
        <Courses addthisCourse={addthisCourse}></Courses>
        <Credits credits = {credits}></Credits>
      </div>
      
    </>
  )
}

export default App
