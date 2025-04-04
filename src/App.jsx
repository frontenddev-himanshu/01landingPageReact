import './App.css'
import './queries.css'
import Landing from './landing.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {


  useEffect(()=> {
    AOS.init();
  },[])

  return (
    <>
      <Landing />
    </>
  )
}

export default App
