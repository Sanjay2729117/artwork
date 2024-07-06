import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import "./css/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [opencart, setOpencart] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleCart = () => {
    setOpencart(!opencart);
  };

  return (
    <>
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className={`items ${open ? 'open' : ''}`}>
        <li><Link className='link' to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link className='link' to="/products" onClick={() => setOpen(false)}>Products</Link></li>
        <li><Link className='link' to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link className='link' to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
      <ul className='Icons'>
       
        <li className='rel linkham' onClick={toggleMenu}>
          {open ? <CloseIcon className='m' /> : <MenuIcon className='m' />}
        </li>
      </ul>
    </div>
   </>
  );
};

export default Navbar;
