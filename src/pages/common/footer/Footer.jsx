import instagramLogo from "../../../assets/footer/instagram-logo.png";
import twitterLogo from "../../../assets/footer/twitter-logo.png";
import facebookLogo from "../../../assets/footer/facebook-logo.png";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="link-box">
        <Link to="">
          <img src={instagramLogo} alt="logo" />
        </Link>
        <Link to="">
          <img src={twitterLogo} alt="logo" />
        </Link>
        <Link to="">
          <img src={facebookLogo} alt="logo" />
        </Link>
      </div>
      <p className="company-title">Design by. Aidentity</p>
    </>
  );
}
