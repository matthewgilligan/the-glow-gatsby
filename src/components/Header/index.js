import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import './styles.scss'

const Header = () => {
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
        <header className="header">
            <div className="brand">
                <div className="search">
                    <FiSearch role="button" href="#" />
                </div>
                <ul className="socialList">
                    <li>
                        <a href={`https://www.instagram.com/${instagramUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href={`https://www.facebook.com/${facebookUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaFacebookF/></a>
                    </li>
                    <li>
                        <a href={`https://twitter.com/${twitterUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaTwitter/></a>
                    </li>
                </ul>
                <Link to="/" className="title">{siteTitle}</Link>
            </div>
            
            
            <div className="nav">
                <ul className="navList">
                    <li>
                        <Link className="navItem" to="/news">News</Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/features">Features</Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/guides">Guides</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;
