import React from 'react'

function SocialMediaBrand(props) {
  return (
    <a href={props.link} className='socialMediaBrand'>
      <i className={`fa-brands ${props.className}`}></i>
      {/* <span>{props.name}</span> */}
    </a>
  )
}

export default SocialMediaBrand
