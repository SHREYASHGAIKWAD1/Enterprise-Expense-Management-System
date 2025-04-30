import React from 'react'
import './Header.css'
import { assets} from '../../assets/assets'
const Header = () => {
  return (
 <div className='header'>
 <div className='header-content'>
         <h2 className='header-h2'>Welcome to the Enterprise Expense Management System!</h2>
         <img className="header-img" src={assets.Background} alt="" />
        <p>"We’re delighted to have you onboard!</p>
        <p>This platform is designed to simplify and streamline your expense tracking, approval processes, and financial reporting.
Whether you're an employee submitting claims, a manager reviewing expenses, or an admin overseeing the system — we ensure a seamless and secure experience for everyone.</p>
<p>Let’s manage expenses the smart way!!"</p>
        
</div>
 </div>  )
}

export default Header