import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
    

    return (
      <>
        <div className="footer">
          {/* <p className="para_text">
            //This is the  online bus ticket booking service
            trusted by most people. we offers
            bus ticket booking through its website,iOS and Android mobile apps
            for all major routes.
          </p> */}
          <p className="para_text" style={{height:100,marginBottom:180}}>&#169;2023 All rights reserved</p>
        </div>
      </>
    );
}

export default Footer;