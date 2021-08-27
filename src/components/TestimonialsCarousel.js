import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../images/avatars/clip.png";
import avatar2 from "../images/avatars/whitencs.png";
import avatar3 from "../images/avatars/avatar-2.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <>
          <img src={avatar1} alt="Clippendales" id="cliplogo"/>
          <div className="myCarousel">
            <h3>Clippendales</h3>
            <p>The logo and website came out exactly as I imagined, it was really cute. The website gave my business the push and visibility it needed to gather more customers. I couldn't have asked for anything better. </p>
          </div>
        </>
        <>
          <img src={avatar2} alt="Neighborly Cleaning Services" id="ncswhite"/>
          <div className="myCarousel">
            <h3>Neighborly Cleaning Services</h3>
            <p>I screamed when I first saw my website. It represents who I am and what I want to accomplish. Not to mention how my great logo came out! 30/10 would recommend!!</p>
          </div>
        </>
        <>
          <img src={avatar3} alt="Clippendales Customer" />
          <div className="myCarousel">
            <h3>Clippendales Customer</h3>
            <p>When asked what brought the customer to them they replied "I googled mobile dog grooming and there were so many choices but I really liked your websites vibe. Thats what drew me to you guys, I really liked your website its super cute and easy to maneuver! </p>
          </div>
        </>
        <>
          <img src={avatar4} alt="John Doe 4" />
          <div className="myCarousel">
            <h3>Will Reese</h3>
            <p>She listens, shes fast, and she always produces fire work. Shes a dope artist choose her if you want your logo/website to look good.  </p>
          </div>
        </>
      </Carousel>
    )
  }
  
  export default TestimonialsCarousel;
  