import React from 'react';

import '../../styles/index.scss';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const HomeLayout = (props) => {
	return (
		<div className="homeLayout">
			<Navigation />
			{props.children}
			<Footer />
		</div>
	)
}

export default HomeLayout
