import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
function App() {


  return (
    <>
      <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
  )
}

export default App
