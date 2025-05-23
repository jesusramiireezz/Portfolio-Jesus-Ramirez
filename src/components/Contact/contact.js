import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("Please fill out the form and click 'Send'.");
  const [alertType, setAlertType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setAlertType('error');
      setAlertMessage('Please fill in all fields before sending.');
      return;
    }

    emailjs.sendForm('service_t90wycx', 'template_n1d0r0h', form.current, 'LZg6FMhDaQkTfD8Gs')
      .then((result) => {
        console.log(result.text);
        setAlertType('success');
        setAlertMessage('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setAlertType('error');
        setAlertMessage('Error sending message. Please try again.');
      });
  };

  return (
    <section id='contactContainer'>
      <div className='contact'>
        <h2 className='contactTitle'>&lt; Contact Me /&gt;</h2>
        <span className='contactDesc'>Get in touch with me using the contact form below.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Name' name='from_name' />
          <input type='email' className='email' placeholder='Email' name='from_email' />
          <textarea name="message" className="message" rows="5" placeholder='Your message here'></textarea>
          <button type="submit" className='formBtn'>Send</button>
          <div className={`alert ${alertType}`}>
            {alertMessage}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
