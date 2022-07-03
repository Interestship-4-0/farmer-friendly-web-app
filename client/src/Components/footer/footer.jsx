import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import './footer.css'
export default function Footer() {

  return (
   <div className="main">
    <div className="copyright">
      <p>Copyright&copy;Clique</p>
    </div>
    <div className="socials">
    <p className="icons"><TwitterIcon/></p>&nbsp;&nbsp;
    <p className="icons"><FacebookIcon/></p>&nbsp;&nbsp;
    <p className="icons"><LinkedInIcon/></p>
   </div>
   <div className="terms">
    <p>Privacy Policy &nbsp;Terms and Conditions</p>
   </div>
   </div>
  );
}