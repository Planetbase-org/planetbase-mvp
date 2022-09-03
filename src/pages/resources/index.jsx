import React from 'react';
import ResourcesComponent from '../../components/ResourceComponent/ResourceComponent';
import Subscribe from '../../components/Subscribe/Subscribe';
import ModalVideo from '../../components/Video/Video';
import Footer from '../../components/Footer/Footer';

function Resources() {
  return (
    <div>
        <ResourcesComponent/>
        <ModalVideo />
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Resources