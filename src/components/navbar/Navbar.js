import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLogout} from 'react-icons/ai'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" href="#">Navbar</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-4">
                    <Link className="nav-link nav_a" to='/'>Home</Link>
                    </li>
                    <li className="nav-item mx-4">
                    <Link className="nav-link nav_a" to='/chart'>Chart</Link>
                    </li>
                    <li className="nav-item mx-4">
                    <Link className="nav-link nav_a" to='/Register'>Register</Link>
                    </li>
                    <li className="nav-item mx-4">
                    <Link className="nav-link nav_a" to='/Service'>Service</Link>
                    </li>
                    <li className="nav-item mx-4">
                    <Link className="nav-link nav_a" to='/Table'>Table</Link>
                    </li>
                   
                    <h5 className='logout'><AiOutlineLogout/></h5>
                    
                </ul>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar