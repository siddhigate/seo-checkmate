import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Nav = () => {
  return (
    <div className='nav'>
        <Link to="/home"><span>SEO Checkmate</span></Link>
    </div>
  )
}

export default Nav