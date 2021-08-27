import React from 'react';
import {Link} from "react-scroll";
import logo from '../ytlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#"><img className="logo" src={logo} alt="AC" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a  to="//ashechan.github.io/" className="nav-link " href="https://ashechan.github.io/">Home</a>
              </li>
              <li className="nav-item">
              <a  to="//ashechan.github.io/about" className="nav-link " href="https://ashechan.github.io/about">About Me</a>
              </li>
              <li className="nav-item">
              <a  to="//ashechan.github.io/experience" className="nav-link active" aria-current="page" href="https://ashechan.github.io/experience">Experience</a>             
               </li>
              <li className="nav-item">
                <a  to="//ashechan.github.io/my-work/"  className="nav-link" href="https://ashechan.github.io/my-work/">My Work</ a>
              </li>
              <li className="nav-item">
              <a  to="//ashechan.github.io/contact" className="nav-link " href="https://ashechan.github.io/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
          </div>
      </nav>
    )
};

export default Navbar