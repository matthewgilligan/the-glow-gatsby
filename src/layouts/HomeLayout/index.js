import React from 'react';

import './../../styles/index.scss';
import Footer from './../../components/Footer';

const HomeLayout = props => {
  return (
      <div classname="homeLayout">
        <div className="container">
          <div className="content">
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
  )
};

export default HomeLayout;