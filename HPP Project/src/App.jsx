import './App.css'
import HomePage from './components/HomePage';
import Form from './components/Prediction Form'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Form></Form>} path='/form' />
        <Route element={<HomePage/> } path='/' />
        <Route element={<AboutUs/>} path='/about'></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
