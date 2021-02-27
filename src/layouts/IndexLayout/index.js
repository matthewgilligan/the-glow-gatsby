import React from 'react';

import '../../styles/index.scss';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const IndexLayout = (props) => {
const {title} = props;

	return (
		<div className="indexLayout">
            <div className="container">
                <Navigation />
                <div className="content">
                    <div className="pageTitle">
                        <h1>{title}</h1>
                    </div>
                    {props.children}
                </div>
            </div>
		</div>
	)
}

export default IndexLayout
