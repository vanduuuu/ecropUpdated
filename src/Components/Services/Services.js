import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import servicelogo from "../../assets/background/service-bg1.jpg";
import leftman from "../../assets/background/left-mann1.webp";
import ecrobanner2 from "../../assets/img/ecro-banner2.jpg";
import servicecircle from "../../assets/img/service-circle-img.jpg";
import i1 from '../../assets/shapes/i1.webp'
import i2 from '../../assets/shapes/i2.webp'
import i3 from '../../assets/shapes/i3.webp';
import "./Service.css";
import { Link } from "react-router-dom";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <div className="services-page">
        {/* Banner Section */}
        <div className="banner-section">
          <img
            src={servicelogo}
            alt="Electronic Crop"
            className="banner-image img-fluid"
            loading="lazy"
          />
          <div
            className="banner-overlay"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <h1 className="banner-title" data-aos="fade-up" data-aos-delay="400">
            Our Services
          </h1>
        </div>
      </div>
      <div className="get-touch-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="service-outer">
                <div className="service-outer-img">
                  <div className="inner-img-service">
                    <img src={ecrobanner2} alt="" loading="lazy"/>
                  </div>
                  <div className="circle-outer-img">
                    <img src={servicecircle} alt="" loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
              <h1>What is Smart eCrop?</h1>
              <p>
                Smart eCrop is an intelligent farming system that combines
                state-of-the-art sensors, data analytics, and automated
                management tools to optimize farming practices. It is designed
                to help farmers achieve higher efficiency, better yields, and
                sustainable farming operations.
              </p>
              <div class="service-here">
                <h6>Key Features : </h6>
                <ul>
                  <li>Innovative Solution</li>
                  <li>Artificial Intelligence</li>
                  <li>Precise Data Analysis</li>
                  <li>Enhanced Farming Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="outer-benefit-sec">
        <div className="service-benefit-sec"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 b1" data-aos="fade-up">
              <h1>Core Features of Smart eCrop:</h1>
              <ul>
              <li><b>Comprehensive Data Collection:</b> Smart eCrop collects detailed data on soil health. weather conditions, crop growth, and more, providing farmers with a holistic view of their fields.</li>
                                <li><b>Advanced Analytics:</b> The system uses powerful algorithms to analyze collected data, offering actionable insights and recommendations to improve farming practices.</li>
                                 <li><b>Automated Systems:</b> Smart eCrop includes automated irrigation, fertilization, and pest control systems that respond to real-time data, ensuring optimal resource use and crop health.</li>
                                <li><b>Remote Monitoring and Control:</b> Farmers can monitor and manage their fields remotely using the Smart eCrop mobile app or web portal, providing convenience and flexibility.</li>
                                <li><b>Predictive Maintenance:</b> The system can predict equipment maintenance needs, reducing downtime and increasing the efficiency of farming operations.</li>
              </ul>
            </div>
            <div className="col-md-6 b2" data-aos="fade-down">
              <h1>Benefits of Smart Farming with Smart eCrop:</h1>
              <ul>
              <li><b>Increased Productivity:</b> By leveraging precise data and automated systems, Smart eCrop helps farmers achieve higher crop yields and better quality produce.</li>
                                <li><b>Cost Savings:</b> Optimized resource use and predictive maintenance lead to significant cost savings in water, fertilizers, and machinery upkeep.</li>
                                <li><b>Sustainability:</b> Smart eCrop promotes sustainable farming practices by reducing water usage, minimizing chemical inputs, and maintaining soil health.</li>
                                <li><b>Enhanced Traceability:</b> The system tracks every stage of crop production, enhancing traceability and ensuring transparency from farm to fork.</li>
                                <li><b>Improved Decision-Making:</b> With real-time data and insights, farmers can make informed decisions quickly, adapting to changing conditions and optimizing their operations.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="left-man-img">
          <img src={leftman} alt="" loading="lazy"/>
        </div>
      </section>
      {/* Services Section */}
      <div className="backgroundcard">
        <div className="container pt-5">
          <div className="row">
            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
            >
              <div className="icon-box">
                <div className="icon">
                <div className="card-icon1 card-icon"><img src={i1} alt="" loading="lazy"/></div>
                </div>
                <h4 className="title">
                  Farm Management
                </h4>
                <p className="description">
                  Unlock the potential of your farm with e-Crop! Get real-time
                  crop advisories sent straight to your phone, optimizing water
                  and fertilizer usage for maximum yield. Say goodbye to
                  guesswork and hello to precision farming. Join the revolution
                  today!
                </p>
                <Link to="/farmmanagement">View More</Link>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                <div className="card-icon1 card-icon"><img src={i2} alt="" loading="lazy"/></div>
                </div>
                <h4 className="title">
                  Application Of Device
                </h4>
                <p className="description">
                  Experience precision agriculture with e-Crop! From local
                  fields to national forecasts, our device revolutionizes crop
                  yield predictions. Receive real-time SMS updates, ensuring
                  farmers stay connected to their crops, no matter the distance.
                  Empower your farm with accurate insights, anytime, anywhere!
                </p>
                <Link to="/ApplicationOfDevice">View More</Link>
              </div>
            </div>

            <div
              className="col-md-6 mx-auto col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                <div className="card-icon1 card-icon"><img src={i3} alt="" loading="lazy"/></div>
                </div>
                <h4 className="title">
                  e-CROP Interface
                </h4>
                <p className="description">
                  e-Crop: Your farming companion, now on web and mobile. Get
                  real-time agro advisories anywhere, anytime. Optimize water
                  and fertilizer usage for maximum yield. Partnering with ICAR
                  for smarter, sustainable agriculture.
                </p>
                <Link to="/interface">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
