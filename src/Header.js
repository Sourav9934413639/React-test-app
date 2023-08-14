import React from 'react'
import {Link} from 'react-router-dom';
import './styles/header.css';
const Header = () => {
  return (
    <div className='pages'>
      <Link to="/" className='page'>Home</Link>
      <Link to="/Movie" className='page'>Movie</Link>
    </div>
  )
}

export default Header
