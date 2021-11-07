import React from 'react'
import { Link } from 'react-router-dom'


function Header(){
    return(
        <header>
            <div className="logo">
                <p><Link to="/">BOOKER</Link></p>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/single">SingleBook</Link></li>
                <li><a href="https://github.com/NickEagle2400/booker" target="_blank" rel="noreferrer">See the Docs</a></li>
            </ul>
        </header>
    )
}

export default Header