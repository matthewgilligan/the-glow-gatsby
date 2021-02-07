import React from 'react';

const Feature = props => {
    const { title, subtitle, slug, author, publishedDate, 
        category, genre, coverImage } = props;

    return (
        <div className="category">
            <div className="categoryTitle">
                <h1>{title}</h1>
            </div>
        </div>
    )
};

export default Feature;
