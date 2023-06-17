import { useState } from 'react'
import './App.css'
import  LandingComponent from "./component/landing";

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
     
     <LandingComponent />

  </div>
  
    
  )
}

export default App
