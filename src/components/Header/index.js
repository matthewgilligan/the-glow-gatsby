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

    return (
        <header className="header">
            <div className="navTop">
                <div className="search">
                    <FiSearch role="button" href="#" />
                </div>
                <Link to="/" className="mobileTitle">{data.site.siteMetadata.siteTitle}</Link>
                <ul className="socialList">
                <li>
                    <a className="mobileSocialItem" href={`https://www.instagram.com/${data.site.siteMetadata.facebookUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaInstagram/></a>
                </li>
                <li>
                    <a className="mobileSocialItem" href={`https://www.facebook.com/${data.site.siteMetadata.facebookUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaFacebookF/></a>
                </li>
                <li>
                    <a className="mobileSocialItem" href={`https://twitter.com/${data.site.siteMetadata.twitterUsername}/`} target="_blank" rel="noreferrer" role="button" aria-label="Mute volume"><FaTwitter/></a>
                </li>
                </ul>
                <Link to="/" className="title">{data.site.siteMetadata.siteTitle}</Link>
            </div>
            <div>
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
