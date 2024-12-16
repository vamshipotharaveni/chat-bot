import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.jpg';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='block-1'>
        <img src={logo} alt='' />
      </div>
      <div className='block-1'>
        <h1>Chat-bot</h1>
      </div>
      <div className='block-1'>
        
        <AnchorLink className='anchor-link' offset={50} href='#contact'><button onClick={() => setMenu('contact')}>Contact</button></AnchorLink>
       
      </div>
    </div>
  );
};

export default Navbar;
