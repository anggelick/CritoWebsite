import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SignUpSection from '../components/SignUpSection/SignUp'
import CritoEight from '../components/Crito8Section/CritoEight'
import SmallMain2 from '../components/SmallMainMenu2/SmallMain2'
import ScrollToTop from "react-scroll-to-top";
import MobileMenu from '../components/MobileMenu/MobileMenu'

const News = () => {
  return (
    <div className="wrapper">
      <ScrollToTop smooth color="#F9D783" />
      <MobileMenu />
      <Header />
      <SmallMain2 />
      <CritoEight />
      <SignUpSection />
      <Footer />
      </div>
  )
}

export default News