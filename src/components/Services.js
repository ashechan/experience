import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faMagic, faTools } from '@fortawesome/free-solid-svg-icons';


function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/> </div>
                                <h3>Web Design</h3>
                                <p>
                                    Get a sleek and beautiful new website or let's enhance what you already have!
                                </p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"  icon={faFileCode} size="2x"/> </div>

                                <h3>Web Development</h3>
                                <p>Your website will be built with the latest technologies</p>
                            </div>
                        </div>
                        
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"  icon={faTools} size="2x"/> </div>

                                <h3>Web Maintenance</h3>
                                <p>
                                    Keep your website up to date
                                </p>
                            </div>
                        </div>
                        {/* */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon"  icon={faMagic} size="2x"/> </div>
                                <h3>Graphic Design</h3>
                                <p>
                                    Need a new logo or revamp your current? Look no further
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Services;
;