import React from 'react';

import './styles.scss';
import IndexLayout from './../layouts/IndexLayout';
import Playlists from './../components/Playlists';

const InterviewsIndex = () => {
    return (
        <IndexLayout title="Features">
            <Playlists />
        </IndexLayout>
        
    );
};

export default InterviewsIndex;
