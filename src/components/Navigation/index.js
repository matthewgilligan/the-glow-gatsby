import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FiSearch } from 'react-icons/fi';

import './styles.scss';
import Logo from './../../images/white-glow-ray.png';

const Navigation = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                    twitterUsername
                    facebookUsername
                    instagramUsername
                }
            }
        }
    `)

    const { siteTitle, twitterUsername, facebookUsername, 
        instagramUsername } = data.site.siteMetadata;

    return (
        <nav className="nav">
            <div className="search">
                <FiSearch role="button" href="#" />
            </div>
            <Link to="/" >
                <img src={Logo} alt="Logo" className="logo" />
            </Link>
        </nav>
    )
};

export default Navigation;
