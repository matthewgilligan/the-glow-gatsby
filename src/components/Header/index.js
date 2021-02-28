import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

const Header = () => {
    return (
        <header className="header">            
            <ul>
                <li>
                    <Link className="navItem" to="/new-music">New Music</Link>
                </li>
                <li>
                    <Link className="navItem" to="/explore">Explore</Link>
                </li>
                <li>
                    <Link className="navItem" to="/interviews">Interviews</Link>
                </li>
                <li>
                    <Link className="navItem" to="/features">Features</Link>
                </li>
            </ul>
        </header>
    )
};

export default Header;
