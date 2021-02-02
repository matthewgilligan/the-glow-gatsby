import React from 'react';

import Footer from './../../components/Footer';

const HomeLayout = props => {
  return (
      <div>
          {props.children}
          <Footer />
      </div>
  )
};

export default HomeLayout;