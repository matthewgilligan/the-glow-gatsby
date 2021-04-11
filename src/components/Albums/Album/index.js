import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Album = props => {
    const { title, artists, genre, cover } = props;

    console.log(cover);

    return (
        <div className="album">
            <div className="imageWrapper">
                <img 
                    src={`http://localhost:1337${cover[0].url}`} 
                    alt=""
                    className="image"
                />
            </div>
            
            <div className="details">
                <h2 className="title">{title}</h2>
                <h3 className="artist">{artists[0].englishName}</h3>
                <p className="genre">{genre.name}</p>
            </div>
        </div>
    )
};

export default Album;