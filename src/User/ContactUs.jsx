import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import dummyContactData from './dummyContactData';
import Header from '../Header';
import Footer from '../Footer';
const ContactUs = () => {
  const [contactData, setContactData] = useState({
    formFields: {},
    customerCare: {},
    socialMedia: {},
    facebookAnnouncement: {},
    instagramAnnouncement: {},
  });

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/api/page/getPage?title=ContactUs')
      .then((response) => response.json())
      .then((result) => {
        setContactData(result.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    < Header />
    <div className="contact-us-container">
      
      <h1>Contact Us</h1>

      <div className="contact-form">
        <div className="group-38071">
          {/* Use contactData.formFields to populate your form fields */}
          <label htmlFor="name">{contactData.formFields.fieldName}</label>
          <input type="text" id="name" placeholder={contactData.formFields.fieldName} />

          <label htmlFor="email">{contactData.formFields.fieldEmail}</label>
          <input type="email" id="email" placeholder={contactData.formFields.fieldEmail} />

          <label htmlFor="message">{contactData.formFields.fieldMessage}</label>
          <textarea id="message" placeholder={contactData.formFields.fieldMessage}></textarea>
        </div>

        <div className="get-in-touch-btn" style={contactData.buttonStyle}>
          {/* Your button content */}
          <button>Get in Touch</button>
        </div>
      </div>

      <div className="additional-content">
        <div className="customer-care">
          {/* Use contactData.customerCare to populate customer care details */}
          <p>Phone: {contactData.customerCare.phoneNumber}</p>
          <p>Email: {contactData.customerCare.email}</p>
          <p>Address: {contactData.customerCare.address}</p>
        </div>

        <div className="social-media">
          {/* Use contactData.socialMedia to populate social media details */}
          <p>Facebook: {contactData.socialMedia.facebook}</p>
          <p>Instagram: {contactData.socialMedia.instagram}</p>
          <p>Twitter: {contactData.socialMedia.twitter}</p>
        </div>

        <div className="facebook-announcement">
          {/* Use contactData.facebookAnnouncement to populate Facebook announcement details */}
          <p>{contactData.facebookAnnouncement.content}</p>
        </div>

        <div className="instagram-announcement">
          {/* Use contactData.instagramAnnouncement to populate Instagram announcement details */}
          <p>{contactData.instagramAnnouncement.content}</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ContactUs;
