import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [credits, setCredits] = useState([]);

  const [creds, setCreds] = useState(20);
  const [total, setTotal] = useState(0);
  var duplicate=0;
  const showToastMessage = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT
      });
};
  const addthisCourse = course =>{
          for(let i=0;i<credits.length;i++){
            if(credits[i]==course){
              duplicate++;
            }
          }
          if(duplicate==0){
              const newCourse = [...credits, course];
              setCredits(newCourse);
          }
          else{
            setCredits(credits);
            addCredits(0);
            addTotal(0);
            showToastMessage('Course already added.');
          }
    }

  const addCredits = hours => {
    const newTime = creds-hours;
    if(newTime>=0){
      setCreds(newTime);
    }
    else if(duplicate!=0){
      setCreds(creds);
    }
    else{
      setCreds(creds);
      showToastMessage('Credit limit reached.');
    }
  }

  const addTotal = hours =>{
    const newTotal = total+hours;
    if(newTotal<=20){
      setTotal(newTotal);
    }
    else{
      setTotal(total);
    }
    
  }
  return (
    <>
    <ToastContainer/>
      <Header></Header>
      <div className='flex justify-around gap-6'>
        <Courses addthisCourse={addthisCourse} addCredits={addCredits} addTotal={addTotal}></Courses>
        <Credits credits = {credits} creds={creds} total={total}></Credits>
      </div>
      
    </>
  )
}

export default App
