import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();   


    // Perform validation here (e.g., check if fields are empty)

    // Send the form data to a server or perform other actions
    console.log('Form data:', { name, email, message });

    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      
      <h2>Contact Me</h2>
      <p>Feel free to reach out with any inquiries or projects.</p>

      {submitted ? (
        <div className="success-message">
          Thank you for your message! I'll get back to you as soon as possible.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='contact-form'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}   

            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}   

            required
          />

          <input type="submit" value="Send"></input>
        </form>
      )}
    </div>
  );
}

export default Contact;

