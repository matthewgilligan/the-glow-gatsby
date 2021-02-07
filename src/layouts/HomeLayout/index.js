import React from 'react';

import '../../styles/index.scss';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const HomeLayout = (props) => {
  return (
    <div className="homeLayout">
      <div className="container">
        <div className="content">
          <Header />
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
