import React from 'react';
import '../index';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Location from '../components/Location/location';
import SmallMain from '../components/SmallMainMenu/SmallMain';
import CritoContactSection2 from '../components/Crito-ContactSection2/CritoContactSection2';
import Formular from '../components/Formular/Formular';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import ScrollToTop from "react-scroll-to-top";

const Contacts = () => {
  return (
    <div className="wrapper">
     <ScrollToTop smooth color="#F9D783" />
    <MobileMenu />
    <Header />
    <SmallMain />
    <CritoContactSection2 />
    <Formular />
    <Location />
    <Footer />
    </div>
  )
}

export default Contacts