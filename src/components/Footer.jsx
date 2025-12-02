import { FaInstagram } from "react-icons/fa";
import "../styles/footer.css";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-col">
        <div className="footer-left">
          <div className="footer-logo-social">
            <span>
              <Link onClick={() => navigate("/")}>
                <img src="/mylogo.svg" alt="RMart" className="nav-logo" />
              </Link>
            </span>
          </div>

          <span className="fs-12">
            RMART is the largest technology provider to E-commerce industry
          </span>
        </div>
        <div className="footer-quick">
          <span className="ql-name">Quick Links</span>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Genz</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-address">
          <div>
            <span>EXPERIENCE RMART APP ON SOCIAL</span>
          </div>
          <div className="down-link">
            <a href="https://play.google.com/store/apps">
              <img
                className="down-link-android"
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              />
            </a>
            <a href="https://itunes.apple.com/in/app">
              <img
                className="down-link-ios"
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              />
            </a>
          </div>
          <div className="footer-social-container">
            <span className="keep-in fs-12">KEEP IN TOUCH</span>
            <div className="footer-social">
              <a target="_blank" href="https://www.instagram.com">
                <FaInstagram />
              </a>
              <a target="_blank" href="https://www.facebook.com/">
                <CiFacebook />
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <CiYoutube />
              </a>
              <a target="_blank" href="https://www.x.com">
                <RiTwitterXLine />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
