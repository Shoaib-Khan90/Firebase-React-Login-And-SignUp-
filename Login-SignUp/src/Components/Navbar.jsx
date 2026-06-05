import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/signup">SignUp</Link>
        </nav>
    </div>
  )
}

export default Navbar
