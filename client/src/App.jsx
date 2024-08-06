import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../src/components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import UploadScreen from './pages/UploadScreen'

    //  set Axios base url
    
     axios.defaults.baseURL = 'http://localhost:8000';
     axios.defaults.withCredentials = true;


function App() {


  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:2000}} />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/upload' element={<UploadScreen />} />
       </Routes>
    </>
  )
}

export default App
