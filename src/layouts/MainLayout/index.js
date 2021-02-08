import React from 'react';

import '../../styles/index.scss';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const MainLayout = (props) => {
	return (
		<div className="mainLayout">
			<Navigation />
			{props.children}
		</div>
	)
}

export default MainLayout
