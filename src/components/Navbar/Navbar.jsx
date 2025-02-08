import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png'
import search_icon from '../../assets/assets/search_icon.svg'
import bell_icon from '../../assets/assets/bell_icon.svg'
import profile_icon from '../../assets/assets/profile_img.png'
import caret_icon from '../../assets/assets/caret_icon.svg'
import { logout } from '../../firebase'


export const Navbar = () => {

const navRef = useRef();

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  })
},[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Tv show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My list</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt="" className='icons' />
          <p>childern</p>
          <img src={bell_icon} alt="" className='icons' />
          <div className="navbar-profile">
            <img src={profile_icon} alt="" className="profile" />
            <img src={caret_icon} alt=""  />
            <div className="dropdown">
              <p onClick={()=>{logout()}}>signout of netflix</p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Navbar