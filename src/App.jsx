import { useState } from 'react';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    
    <Footer />
    </>
  )
}

export default App
