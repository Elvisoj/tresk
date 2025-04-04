import React from 'react';
import './about.css';

function About() {
  return (
    <div style={{ backgroundColor: '#f0f8ff', color: '#333', padding: '50px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'justify' }}>
        Welcome to our website! We are dedicated to providing the best services and solutions tailored to your needs. 
        Our team of experts works tirelessly to ensure customer satisfaction and deliver exceptional results. 
        Thank you for choosing us as your trusted partner.
      </p>
    </div>
  );
}


export default About;
