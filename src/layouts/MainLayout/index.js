import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/index.scss';

const MainLayout = (props) => {
  return (
    <div className="mainLayout">
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

export default MainLayout
