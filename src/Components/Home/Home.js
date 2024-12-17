import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import bannerresize from "../../assets/background/ecrop-vdo.mp4";
import croplogo from "../../assets/shapes/RICE-01.png";
import "./Home.css";
import Whychooseuse from "./Whychooseuse";
import agro from "../../assets/img/agro.png";
import Yourreason from "./Yourreason";
import { Link } from "react-router-dom";
import application from "../../assets/img/application.png";
import ecrop_interface from "../../assets/img/ecrop-interface.png";
import Modal from "./Modal"; // Import the Modal component
import e1 from "../../assets/img/ecrop-app1.png";
import e2 from "../../assets/img/ecrop-app2.png";
import e3 from "../../assets/img/ecrop-app10.png";
import e4 from "../../assets/img/ecrop-app11.png";
import e5 from "../../assets/img/ecrop-app5.png";
import e6 from "../../assets/img/ecrop-app6.png";
import e7 from "../../assets/img/ecrop-app7.png";
import e8 from "../../assets/img/ecrop-app8.png";
import e9 from "../../assets/img/ecrop-app9.png";
import e10 from "../../assets/img/ecrop-app10.png";
import e11 from "../../assets/img/ecrop-app12.png";
import QrCode from "../../assets/img/ecrop-scan.png";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Default to true to open modal on load
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500,
      once: true,
      mirror: false,
    });

    // Open the modal when the component mounts
    setIsModalOpen(true);

    // Intersection Observer for lazy loading video
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className={`container-home`}>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <video
                ref={videoRef}
                autoPlay={isVideoVisible}
                muted
                loop
                playsInline
                className="d-block w-100"
              >
                {isVideoVisible && (
                  <source src={bannerresize} type="video/mp4" />
                )}
                Your browser does not support the video tag.
              </video>

              <div
                className="carousel-caption text-white text-center"
                data-aos="fade-up"
              >
                <div className="main-slider-one__sub-title-bx">
                  <img
                    className="main-slider-one__tree-icon"
                    src={croplogo}
                    loading="lazy"
                    alt="agrofa"
                  />
                  <h5 className="main-slider-one__sub-title">
                    Simulating Crop Growth
                  </h5>
                </div>
                <h1
                  className="gradient-txt main-slider-one__title"
                  data-aos="fade-up"
                  duration="5000"
                >
                  SMART FARMING WITH ELECTRONIC CROP <br /> (e-Crop)
                </h1>
                <p className="main-slider-one__info-text d-none d-md-block">
                  Developed and patented by ICAR-CTCRI, the e-Crop is an IoT
                  device <br />
                  designed for smart farming by simulating crop growth in
                  real-time.
                </p>
                <div className="main-slider-one__btn">
                  <Link
                    to="/services"
                    className="btn btn-warning text-black fw-bold px-4 py-2 rounded"
                    data-aos="fade-up"
                  >
                    <span>Our Services</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*code for mob-app-ecrop */}
          <section className="esection">
            <div className="container-fluid">
              <div className="row py-3">
                <div
                  className="col-md-6 col-12 section-left"
                  data-aos="fade-up"
                >
                  <h1>e-Crop App</h1>
                  <p>
                    Precision Grow is an innovative AgriTech startup that is
                    transforming the way farmers manage and grow their crops. At
                    Precision Grow, we harness the power of technology, data
                    analytics, and cutting-edge solutions to make farming
                    smarter, more efficient, and more sustainable. As part of
                    Tech Visit Pvt Ltd, we have taken a technology to the next
                    level by developing the e-Crop App in.
                  </p>

                  <b>Get this eCrop App from Play store for smart farming. </b>

                  <p>
                    We are dedicated to revolutionizing agriculture through
                    cutting-edge technology. We aim to empower farmers with
                    precise satellite data for real-time crop monitoring and
                    deploy advanced AI solutions to provide actionable crop
                    advisory.
                  </p>

                  <p>
                    Precision Grow has developed an innovative system called
                    eCrop. eCrop integrates weather forecasting, pest and
                    disease monitoring, soil health analysis, and expert
                    agricultural advice, providing farmers with a holistic tool
                    to manage every aspect of their farming operation.
                  </p>
                  <br />
                  <div className="btn-qrscan">
                    <div className="main-slider-one__btn pt-3">
                      <Link
                        to="https://play.google.com/store/apps/details?id=com.precisiongrow.ecrop"
                        className="btn btn-warning text-black fw-bold px-4 py-2 rounded"
                        data-aos="fade-up"
                      >
                        <span>Get The App</span>
                      </Link>
                    </div>
                    <div className="qr-scan">
                      <img w-100 src={QrCode} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 section-right">
                  <div id="carouselExample" class="carousel slide">
                    <div className="carousel-inner " data-aos="fade-up">
                      <div className="carousel-item active">
                        <div className="image-ecrop">
                          <img className="w-100" src={e1} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e2} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e3} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e4} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e5} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e6} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e7} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e8} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e9} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e10} alt="ecrop" />
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="image-ecrop">
                          <img className="w-100" src={e11} alt="ecrop" />
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <span className="carousel-control-prev-icon"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <span className="carousel-control-next-icon"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="water-drop" data-aos="fade-up">
            <div className="container">
              <div className="row justify-content-center jj">
                <div className="col-md-4">
                  <div className="card">
                    <div className="shine-effect"></div>
                    <div className="card-icon">
                      <img src={agro} alt="" loading="lazy" />
                    </div>
                    <div className="card-content">
                      <h3>Real-Time Agro Advisory</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="shine-effect"></div>
                    <div className="card-icon">
                      <img src={application} alt="" loading="lazy" />
                    </div>
                    <div className="card-content">
                      <h3>Applications Of e-CROP</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="shine-effect"></div>
                    <div className="card-icon">
                      <img src={ecrop_interface} alt="" loading="lazy" />
                    </div>
                    <div className="card-content">
                      <h3>e-Crop Interface</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* your reason choose use */}
        <Yourreason />
        {/* why choose us container */}
        <Whychooseuse />
        <div className="container">
          <div className="row">
            <div className="col-md-10 pp-info mx-auto">
              <p className="mb-2">
                The e-Crop IoT device, a technology developed by ICAR-CTCRI
                which recently received Indian Patent​​, is licensed to{" "}
                <span>Precision Grow, A Unit of Tech Visit IT Pvt. Ltd.</span>,
                Mumbai facilitated by Agrinnovate, ICAR, New Delhi.
              </p>
              <p>
                e-Crop is a digital device that helps crop cultivators
                judiciously use natural resources such as soil and water in such
                an intelligent way that external inputs are minimized thereby
                reducing environmental footprint.
              </p>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}

export default Home;
