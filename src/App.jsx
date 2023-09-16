import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import { useState } from 'react'

function App() {
  const [credit, setCredit] = useState([]);
  const addthisCourse = course =>{
    // const newCourse = [...credit, course];
    // setCredit(newCourse);
    console.log('kahini');
  }
  return (
    <>
      <Header></Header>
      <div className='flex justify-around gap-6'>
        <Courses addthisCourse={addthisCourse}></Courses>
        <Credits></Credits>
      </div>
      
    </>
  )
}

export default App
