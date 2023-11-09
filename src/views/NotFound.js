import React from 'react'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

const NotFound = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="notfound-section">
          <h1>Sorry! <br/> This Page Was Not Found!</h1>
          <p>Unable to find this page - please try again</p>
          <Link to="/Home" className="btn-yellow">Go back again <i className="fa-solid fa-arrow-up-right"></i></Link>
          <br/>
        </section>
      </main>
      <Footer />
      </div>
  )
}

export default NotFound