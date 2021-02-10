import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <ul className="nav-links">

                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/showNotices'>
                    <li>Expiring Notices</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;