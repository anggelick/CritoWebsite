import React from 'react'
import './Formular.css'
import { useState } from 'react';


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
    setError('');
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setError('');
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
    setError('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name) {
      setError('Name is required');
      return;
    }

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!message) {
      setError('Message is required');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setResponse(await response.text());
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="crito-contact-3">
        <div className="container">
          <div className="content">
      <div className="text-area">
      <h2>Leave us a message <br/>for any information.</h2>
      <div className="item name_email">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          value={name}
          onChange={handleNameChange}
        />
        {error && error.includes('Name') && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
        </div>
      </div>
      <div className="item name_email">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          value={email}
          onChange={handleEmailChange}
        />
        {error && error.includes('Email') && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
      <div className="item">
        <textarea
          id="message"
          name="message"
          placeholder="Your Message*"
          value={message}
          onChange={handleMessageChange}
        />
        {error && error.includes('Message') && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="btn">
        <button className="btn-yellow" type="submit">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
        </div>
      )}
      {response && (
        <p style={{ color: 'green' }}>Form submitted successfully!</p>
      )}
      </div>
      </div>
          </section>
    </form>
  );
}




export default ContactForm


