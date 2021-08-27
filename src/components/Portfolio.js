import React from 'react';
import ccp from "../images/ccp.png";
import fel from "../images/fel.png";
import js from "../images/js.png";
import rwd from "../images/rwd.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


function Portfolio() {
//CCP
    
    const openPopupboxCcp = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={ccp} alt="Amazon Web Service Cloud Practitioner" />
        <p className="popup-text">Amazon Web Services Certified Cloud Practitioner </p>
        <b className="hyper-text">View</b><a className="hyper-link" onClick={() => window.open("https://www.credly.com/badges/14135dab-1292-4a95-8294-0d1584f1cd44/public_url")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Amazon Web Service Cloud Practitioner",
              },
            },
          });
    }

    const popupboxConfigCcp = {
        titleBar: {
            enable: true,
            text: "Amazon Web Service Cloud Practitioner"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }
     //RWD
    
     const openPopupboxRwd = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={rwd} alt="Responsive Web Design Certification" />
      <p className="popup-text">Responsive Web Design certification from FreeCodeCamp</p>
      <b className="hyper-text">View:</b><a className="hyper-link" onClick={() => window.open("https://freecodecamp.org/certification/ashechan/responsive-web-design", "_blank")}> Click Here</a> <br/>
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Responsive Web Design Certification",
            },
          },
        });
  }

  const popupboxConfigRwd = {
  
      titleBar: {
          enable: true,
          text: "Responsive Web Design Certification"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }

   //Javascript
    
   const openPopupboxJs = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={js} alt="JavaScript Algorithms and Data Structures" />
    <p className="popup-text">JavaScript Algorithms and Data Structures certification from FreeCodeCamp </p>
    <b className="hyper-text">View:</b><a className="hyper-link" onClick={() => window.open("https://freecodecamp.org/certification/ashechan/javascript-algorithms-and-data-structures", "_blank")}> Click Here</a> <br/>
    
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "JavaScript Algorithms and Data Structures",
          },
        },
      });
}

const popupboxConfigJs = {

    titleBar: {
        enable: true,
        text: "JavaScript Algorithms and Data Structures"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

     

      //FEL
    
    const openPopupboxFel = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={fel} alt=" Front End Libraries" />
      <p className="popup-text">Front End Libraries certification from FreeCodeCamp  </p>
      <b className="hyper-text">View:</b><a className="hyper-link" onClick={() => window.open("https://www.freecodecamp.org/certification/ashechan/front-end-libraries", "_blank")}> Click Here</a> <br/>
      
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Front End Libraries",
            },
          },
        });
  }

  const popupboxConfigFel = {
  
      titleBar: {
          enable: true,
          text: "Front End Libraries"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Certifications</h1>
                < div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxCcp}>
                    <img className="portfolio-image" src={ccp} alt="Clippendales mobile dog salon website" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                  {/*..*/}
                  <div className="portfolio-image-box" onClick={openPopupboxRwd}>
                    <img className="portfolio-image" src={rwd} alt="Neighborly LCeaning Services" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>    
                
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxJs}>
                    <img className="portfolio-image" src={js} alt="JavaScript Algorithms and Data Structures" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>   
                 {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxFel}>
                    <img className="portfolio-image" src={fel} alt="Front End Libraries" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  
              
        
            </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigCcp} />
            <PopupboxContainer {...popupboxConfigRwd} />
            <PopupboxContainer {...popupboxConfigJs} />
            <PopupboxContainer {...popupboxConfigFel} />
         
            
        </div>
    )
}

export default Portfolio
