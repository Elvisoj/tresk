import React from 'react'
import assets from '../../assets/assets'

function LandingPage() {
  return (
    <div className='landing-page'>
      <div className="landing-page-wrapper">
        <img className='landing-page-image' src={assets.WriteBg} alt="" />
        <div className="bg-overlay"></div>
        <div className="content">
            <h2>Let's explore</h2>
            <h1>Tresk Creative Media</h1>
            <h3>Together and enjoy what it has to offer in this seasonified period of elevation</h3>
            <p>Classical physics is a branch of physics that deals with the study of macroscopic systems and follows the established principles that has been established before the introduction or formulation of Modern physics (Quantum mechanics and Relativity). The principles include Newtonian mechanics, thermodynamics, electromagnetism and classical wave theory.</p>
            <button className="btn">Explore Now</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
