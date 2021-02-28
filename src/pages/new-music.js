import React from 'react';

import './styles.scss';
import IndexLayout from '../layouts/IndexLayout';
import Albums from '../components/Albums';

const NewMusicIndex = () => {
    return (
        <IndexLayout title="New Music">
            <Albums />
        </IndexLayout>  
    );
};

export default NewMusicIndex;
