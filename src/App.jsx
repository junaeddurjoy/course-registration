import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Credits from './components/Credits/Credits'

function App() {
  return (
    <>
      <Header></Header>
      <div className='flex justify-around gap-6'>
        <Courses></Courses>
        <Credits></Credits>
      </div>
      
    </>
  )
}

export default App
