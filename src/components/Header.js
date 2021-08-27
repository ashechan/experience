import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>welcome to AC web design</h1>
                <Typed
                className="typed-text"
                strings={["Web Design", "Web Development", "Web Maintenance", "Graphic Design" ]}
                typeSpeed={30}
                backSpeed={60}
                loop
                />
                <a href="https://ashechan.github.io/contact/" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header;
