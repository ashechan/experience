import React from "react";
import author from "../me.jpg";


const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p className="about-p">
          Hey! I’m Ashe. I am a  Web Designer and Web Developer, as well as a Graphic Designer and Artist.  Basically I specialize in bringing your vision to life.</p> 

<p className="about-p">Using my knowledge of web development ( HTML/CSS, React, WordPress, VsCode, and more), I have consulted for start-ups, created and deployed beautiful websites, and provided standard website maintenance. I even placed in an international art contest by using nothing but HTML/CSS to create my piece. </p>

<p className="about-p">With my eye for design and a little help from Adobe Creative Suite and Clip Studio Paint, I have rebranded and helped build brands, created eye-catching logos, business cards, and cover art.

          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
