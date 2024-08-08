import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"
import logo from '../../assets/logo.svg'

const Menu = () =>{
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt">What is GPT3?</a></p>
    <p><a href="#possiblity">Open AI</a></p>
    <p><a href="#featurew">Case Study</a></p>
    <p><a href="#blog">Library</a></p>
  </>
}

const Navbar = () => {

const [toogleMenu, setToogleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
       <div className='gpt3__navbar-links'>
       <div className='gpt3__navbar-links_logo'>
        <img src={logo} alt="logo" />
       </div>
            <div className="gpt3__navbar-links_container">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt">What is GPT3?</a></p>
              <p><a href="#possiblity">Open AI</a></p>
              <p><a href="#featurew">Case Study</a></p>
              <p><a href="#blog">Library</a></p>
              {/* <Menu/> */}
            </div>
       </div>
      <div className="gpt3__navbar_sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
              { toogleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToogleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToogleMenu(true)}/>
              }
              {
                toogleMenu && (
                  <div className="gpt3__navbar-menu_container scale-up-center">
                      <div className="gpt3__navbar-menu_container-links">
                        <Menu/>
                        <div className="gpt3__navbar_sign-links-bar">
                          <p>Sign in</p>
                          <button type='button'>Sign up</button>
                        </div>
                      </div>
                  </div>

               ) }
                
      </div>
    </div>
  )
}

export default Navbar
