import React from 'react'
import { Link } from 'react-router'
import './style.css'

const NavBar = () => {
    return(
        <div className='navbar'>
            <h1>La patisserie 3WA</h1>
            <div className='container'>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/game">Game</Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default NavBar