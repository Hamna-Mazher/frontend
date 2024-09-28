import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import nav from '../Assets/nav-menu.jpg'
const Navbar = () => { 
    const[ menu,setMenu] =useState("home");
    const menuRef = useRef();
    const  dropdown_toggle =(e)=>{
     menuRef.current.classList.toggle('nav-menu-visible');
     e.target.classList.toggle('open');
    }
  return (
   
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt="" />
    </div>
    
    <img  className='nav-dropdown' onClick={dropdown_toggle} src={nav}alt="" />
  
    
    {/* <i  class="fa-solid fa-bars"></i> */}
    <ul  ref ={menuRef} className='nav-menu'>
      <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration: 'none'}} to='/'>Home </Link>  {menu==="home"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("models")}}><Link style={{textDecoration: 'none'}} to='/models'> ATV Models</Link>  {menu==="models"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("vedio")}}> <Link style={{textDecoration: 'none'}}  to='/vedio'> Vedio</Link> {menu==="vedio"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("about")}}> <Link style={{textDecoration: 'none'}} to='/about'> About Us</Link> {menu==="about"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("call")}}><Link  style={{textDecoration: 'none'}} to='/ordercall'> Order a call</Link> 	{menu==="call"?<hr/>:<></>}</li>
      {/* <li onClick={()=>{setMenu("ru")}}>Ru {menu==="ru"?<hr/>:<></>}</li> */}
</ul>
        </div>
       
  )
}

export default Navbar