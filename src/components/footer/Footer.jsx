import React from 'react';
import "../../styles/Footer.css"
import SocialMediaBrand from './SocialMediaBrand';
import ProjectLink from './ProjectLink';

function Footer() {
  const projectData = [
    {
      projectLink: "https://www.elvisojonathan.com",
      projectName:  "EOJ Graphic Solution",
    },
    {
      projectName: "Glicting Ortagona Web0",
      projectLink: "https://www.glictingortagonaweb6.com",
    },
    {
      projectName: "Glicting Ortagona Web6",
      projectLink: "https://www.glictingortagonaweb6.com",
    },
    {
      projectName: "Glicting Ortagona Web60",
      projectLink: "https://www.glictingortagonaweb6.com",
    },
    {
      projectName: "Glicting Ortagona Web6l",
      projectLink: "https://www.glictingortagonaweb6.com",
    },
  ]
  const socialMediaData = [
    {
      link: "https://www.facebook.com/elvisojonathan673/",
      className: "fa-facebook",
      name: "Facebook",
    },
    {
      link: "https://www.instagram.com/elvisojonathan/",
      className: "fa-instagram",
      name: "Instagram",
    },
    {
      link: "https://www.linkedin.com/in/elvis-omonigho-jonathan-915533342/",
      className: "fa-linkedin",
      name: "LinkedIn",
    },
    {
      link: "https://www.twitter.com/elvisojonathan/",
      className: "fa-twitter",
      name: "Twitter",
    },
    {
      link: "https://www.github.com/elvisoj",
      className: "fa-github",
      name: "GitHub",
    },
  ];
  return (
    <footer className='footer w-full text-center px-[10%] py-4'>
      <div className="footer-wrapper">
        <div className="project">
          <h2>Projects Portfolio</h2>
          <div className="project-wrapper">
            {
              projectData.map((data)=> <ProjectLink key={data.projectName} {...data} />)
            }
          </div>
        </div>
        <p className="copy-right">
          EOJ Graphic Solution &copy; 2024 Ivaris International
        </p>
      </div>
        <div className="socialMedia">
          {
            socialMediaData.map((data)=> <SocialMediaBrand key={data.name} {...data} />)
          }
        </div>
    </footer>
  );
}

export default Footer;
