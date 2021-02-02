import React from 'react';

import './../../styles/index.scss';
import Footer from './../../components/Footer';

const MainLayout = props => {
  return (
      <div classname="mainLayout">
        <div className="container">
          <div className="content">
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
  )
};

export default MainLayout;