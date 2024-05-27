import { useState } from 'react';
import './navbar.scss';
// import logo from '../../../public/logo.webp';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a className='logo' href='/'>
          <img src="assets/logo.svg" alt="" />
          <span>RubyEstate<strong>India</strong></span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>

      </div>
      <div className="right">
        <a href="/">
          Sign In
        </a>
        <a href="/" className='register'>
          Sign Up
        </a>
        <div className="menuIcon">
          <img src="assets/blueMenu.png" alt="" onClick={()=>setOpen((prev)=>!prev) }/>
        </div>
        <div className={open?'menu active': 'menu'}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar