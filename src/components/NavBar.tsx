import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="nav">
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Welcome to Unique Calculator App</Link>
                    </li>
                    
                </ul>
            </nav>
            <br/>
        </div>
    )
}

export default NavBar
