import React from 'react';
import './Contact.css';
import { FaPhone,  FaLinkedin, FaGithub } from 'react-icons/fa';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://formspree.io/f/xkndyndb', {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    })
    .then(() => {
      alert('Your message was submitted. Thank you!');
      event.target.reset();
    })
    
    .catch((error) => {
      console.error(error);
      alert('Error. Message not submitted.');
    });
  }

  render() {
    return (
      <div className="Contact" id="contact">
        <h1>Lets talk!</h1>
        <div className="Contact-content">
          <div className="Contact-info">
          <div className="info-box">
              <FaPhone />
              <p>+40726.609.452</p>
            </div>
            <div className="info-box">
              <FaGithub />
              <p>Github</p>
              
            </div>
            <div className="info-box">
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
          </div>
          <form className="Contact-form" onSubmit={this.handleSubmit} noValidate>
            <div className="Contact-field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required onChange={this.handleInputChange} value={this.state.name} />
            </div>
            <div className="Contact-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required onChange={this.handleInputChange} value={this.state.email} />
            </div>
            <div className="Contact-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required onChange={this.handleInputChange} value={this.state.message} />
            </div>
            <div className="Contact-field">
              <button type="submit" className="Contact-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
