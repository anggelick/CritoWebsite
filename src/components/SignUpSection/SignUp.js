import './SignUp.css';
import React from 'react'
import critoMbackground from '../../assets/images/crito_m_background.svg'

const SignUp = () => {
  return (
    <section class="signup-section">
    <div class="container">
      <div class="signupform">
        <form action="/action_page.php">
          <div class="signup-textarea">
            <h2>Get News Updates By Signup</h2>
            <div class="button-container">
              <input type="text" placeholder="username@domain.com" name="mail" required/>
            </div>
            <input type="submit" value="Subscribe"/>
          </div>
        </form>
      </div>
      <div class="header-picture-background">
        <img src={critoMbackground} alt="crito logotype"/>
      </div>
    </div>
  </section>
  )
}

export default SignUp