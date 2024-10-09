import React from 'react'
import './contact.css'
export default function Contact() 
{
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>If you have any questions or need assistance, feel free to reach out to us!</p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="contact-details-section">
        <h2>Contact Details</h2>
        <p>
          <strong>Email:</strong> support@constitutioncompass.com
        </p>
        <p>
          <strong>Phone:</strong> +91 123 456 7890
        </p>
        <p>
          <strong>Address:</strong> 
          <br />
          Constitution Compass, 
          <br />
          123 Constitutional Lane, 
          <br />
          New Delhi, India
        </p>
        <p>
          <strong>Working Hours:</strong> 
          <br />
          Monday to Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday: 10:00 AM - 4:00 PM
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Get in Touch</h2>
        <p>We look forward to hearing from you!</p>
      </section>
    </div>
  );
}
