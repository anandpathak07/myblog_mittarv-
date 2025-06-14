import React from 'react';
import '../styles/about.scss'; // Ensure this path matches your folder structure

const About = () => {
  return (
    <div className="about-container">
    <h1 className="about-title">About MyBlog</h1>

    <p className="about-paragraph">
      <strong>MyBlog</strong> is a personal blogging platform built and maintained by <strong>Anand Pathak</strong>, 
      a Computer Science graduate (B.Tech CSE, 2025) from JIS College of Engineering, Kalyani, West Bengal.
    </p>

    <p className="about-paragraph">
      This platform allows users to write, publish, and share blog posts with ease. It includes features 
      like user authentication (login/register), personalized profiles, blog CRUD operations, and an elegant 
      responsive design using modern web technologies like React, Node.js, MongoDB, and SCSS.
    </p>

    <p className="about-paragraph">
      MyBlog was created to explore full-stack development and provide a minimal yet powerful space for 
      sharing knowledge, experiences, and thoughts online. It reflects Anand’s passion for clean UI, 
      backend logic, and secure web practices.
    </p>

    <p className="about-paragraph">
      If you'd like to collaborate, share feedback, or connect for future opportunities, feel free to reach out.
    </p>

    <a href="mailto:lionelanand3@gmail.com" className="about-button contact-button">
      📧 Contact Me
    </a>
  </div>
  );
};

export default About;
