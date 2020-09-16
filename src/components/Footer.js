import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best deals
                </p>
                 <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <form>
                    <input type="email" name="email" className="footer-input" placeholder="Your Email"/>
                <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                           <Link to="/">Careers</Link>
                              <Link to="/">Investors</Link>
                                 <Link to="/">Terms of Service</Link>
                    </div>
                          <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                           <Link to="/">Careers</Link>
                              <Link to="/">Investors</Link>
                                 <Link to="/">Terms of Service</Link>
                    </div>
               
                </div>
                  <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Video</Link>
                        <Link to="/">Ambassador</Link>
                           <Link to="/">Agency</Link>
                              <Link to="/">Influencer</Link>
                               
                    </div>
                          <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                           <Link to="/">Youtube</Link>
                              <Link to="/">Twitter</Link>
                    </div>
               
                </div>
            </div>
            <section className="social-media">
<div className="social-media-wrap">
    <div className="footer-logo">
        <Link to="/"className="social-logo">
            TRVL <i className="fab fa-typo3"></i>
        </Link>
    </div>
    <small className="website-rights">TRVL &copy;{new Date().getFullYear()}</small>
<div className="social-icons">
    <Link className="social-icon-link facebook"
    to="/"
    target="_blank"
    aria-label="Facebook"
    >
        <i className="fab fa-facebook-f"></i>
    </Link>
      <Link className="social-icon-link instagram"
    to="/"
    target="_blank"
    aria-label="Instagram"
    >
        <i className="fab fa-instagram"></i>
    </Link>
    <Link className="social-icon-link linkedin"
    to="/"
    target="_blank"
    aria-label="Linkedin"
    >
        <i className="fab fa-linkedin"></i>
    </Link>
    <Link className="social-icon-link twitter"
    to="/"
    target="_blank"
    aria-label="Twitter"
    >
        <i className="fab fa-twitter"></i>
    </Link>
</div>
</div>
            </section>
        </div>
    )
}
 
export default Footer
