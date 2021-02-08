import React from 'react';

import './styles.scss';
import MainLayout from './../layouts/MainLayout';
import Features from './../components/Features';

const FeaturesIndex = () => {
    return (
        <MainLayout>
            <div className="category">
                <div className="navColor">a</div>
                <div className="content">
                    <div className="categoryTitle">
                        <h1>Features</h1>
                    </div>
                    <Features />
                </div>
            </div>
        </MainLayout>
        
    )
}
export default FeaturesIndex
