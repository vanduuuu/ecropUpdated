import React from "react";
import "./Footer.css";
import footerlogo from "../../../assets/img/ee-crop-white.webp";
import { Link } from "react-router-dom";
import ind from '../../../assets/img/in.webp'
import eu from '../../../assets/img/eu.png'
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="foot-newsletter">
            
        </div>
        <div className="container">
          <h2 className="text-whitee 
          text-center my-5">
            e-CROP : Your Own Agriculture <br />
            Assistant
          </h2>
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="widget1">
                <div className="footerlogo">
                  <img src={footerlogo} className="img-fluid" loading="lazy" alt="" />
                </div>
                <p>
                The Electronic Crop (e-Crop) device, developed and
                patented by ICAR-CTCRI, is designed for smart
                farming. Manufactured by Tech Visit IT Pvt Ltd, it leverages
                technology to enhance agricultural practices.
                </p>
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="https://www.facebook.com/electroniccrop/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow/">
                        <i className="fab fa-twitter"> </i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/electronic-crop/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/electronic_crop/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://youtube.com/live/rEZCjzPjfRU?feature=share">
                      <i class="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 footer-here-is">
              <h5>Get in Touch and Start Your Journey to Success</h5>
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                  <li><h6>Corporate Office :</h6></li>
                    <li>
                    Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710</li>
                   
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="col-md-10 text-white">
                  <ul>
                    <li><h6>Regd. Office :</h6></li>
                    <li>
                    B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703

                    </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5 text-white">
                <div class="col-lg-7 mb-5 col-md-12">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src={ind}
                        alt=""
                        loading="lazy"
                      />
                      <span>India</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +91 22 48888888 / 46165798
                    </li>
                    <li>
                      <span>MOBILE</span> : +91 8097283444
                    </li>
                  </ul>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                  <ul>
                    <li>
                      <img
                        class="imgh"
                        src={eu}
                        alt=""
                        loading="lazy"
                      />
                      <span>USA</span>
                    </li>
                    <li>
                      <span>PHONE</span> : +1 424-239-0105
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-md-2 col-lg-2 offset-lg-1">
              <div className="widget4">
                <h5>Explore</h5>
                <ul>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="https://precisiongrowindia.blogspot.com/">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyRightArea">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center text-md-left mb-3 mb-md-0">
                <p>
                  &copy; 2024. All Rights Reserved by Precision Grow (A Unit of
                  Tech Visit IT Pvt Ltd)
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
