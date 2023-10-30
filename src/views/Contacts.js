import React from 'react';
import '../index';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SmallMain from '../components/SmallMainMenu/SmallMain';
import CritoContactSection2 from '../components/Crito-ContactSection2/CritoContactSection2';
import Formular from '../components/Formular/Formular';

const Contacts = () => {
  return (
    <div className="wrapper">
    <Header />
    <SmallMain />
    <CritoContactSection2 />
    <Formular />
    <Footer />
    </div>
  )
}

export default Contacts