import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import EmployeePage from './Components/Employee/Employee'
import ManagerPage from './Components/Manager/Manager'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Signup from './Components/Signup/Signup'
import Footer from './Components/Footer/Footer'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App;