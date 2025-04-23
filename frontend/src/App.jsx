import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header></Header>
      <Footer/>
    </div>
  )
}

export default App