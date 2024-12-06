import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import speech from '../../assets/img/home-banner-w.jpg';
import device from '../../assets/img/ecro-banner2.jpg';
import certificate from '../../assets/img/img1.jpeg';
import star1 from '../../assets/img/star1.png';
import star2 from '../../assets/img/star2.png';
import star3 from '../../assets/img/star3.png';
import elogoshape from '../../assets/shapes/ecbsf-logo.png';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <section className="about-outer container-fluid" data-aos="fade-up">
        <div className="container">
          <div className="about-info-div col-md-12">
            <div className="about-shape"></div>
            <h1>Smart Farming with <br /> Smart e-CROP</h1>
            <div className="about-section__stars">
              <img src={star1} alt="" className="star1" loading="lazy" />
              <img src={star2} alt="" className="star2" loading="lazy" />
              <img src={star3} alt="" className="star3" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="who-we-are row">
          <div className="images-container col-md-12 col-lg-6" data-aos="fade-right">
            <img loading='lazy' src={certificate} alt="Presentation" className="main-image" />
            <div className="overlay-image-container">
              <img src={device} alt="Event" loading="lazy" className="overlay-image" />
            </div>
          </div>
          <div className="content-about col-md-12 col-lg-5 offset-lg-1" data-aos="fade-left">
            <h2>Who We Are</h2>
            <p>
              Precision Grow, a distinguished unit of Tech Visit IT Pvt Ltd, has embarked on a groundbreaking journey in revolutionizing smart farming technology through a strategic collaboration with the prestigious Indian Council of Agricultural Research (ICAR). On June 5th, 2024, commemorating World Environment Day, Precision Grow sealed a pivotal contract for the manufacturing and dissemination of the groundbreaking e-Crop technology. This innovative agricultural solution seamlessly amalgamates cutting-edge technology with sustainable agricultural practices, aiming to optimize crop production while mitigating adverse environmental impacts.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid abt-y">
        <img src={elogoshape} alt="ICAR Logo" loading="lazy" data-aos="fade-zoom-up"/>
        <div className="header">Addressing Food Security</div>
        <div className="container description">
            The global challenge of achieving food security is compounded by population growth and diminishing resources. Precision agriculture offers tailored solutions to enhance production and minimize environmental harm, yet a notable yield gap persists. Smart farming integrates technology with traditional practices, empowering informed decision-making and resource optimization to narrow yield gaps and bolster food security efforts.
        </div>
      </div>
      <div className="steps" data-aos="fade-up">
            <div className="step step11" data-step="01">
                <p>Food security challenge intensifies due to growing populations and limited resources, exacerbated by diminishing cultivable land availability.</p>
            </div>
            <div className="step" data-step="02">
                <p>Precision agriculture offers tailored solutions to boost production and minimize environmental harm, yet a notable yield gap persists globally.</p>
            </div>
            <div className="step" data-step="03">
                <p>Smart farming merges technology with traditional practices, enabling informed decisions, resource optimization, and heightened productivity.</p>
            </div>
            <div className="step step11" data-step="04">
                <p>Integration of real-time data, sensors, and analytics holds significant promise in narrowing yield gaps and strengthening food security initiatives.</p>
            </div>
        </div>
      <section className="smart-ecrop">
        <div className="container">
            <div className="row about-bg-row">
                <h1>How Smart e-Crop Transforms Farming</h1>
                <div className="col-md-6 text-section" data-aos="fade-up">
                    <div className="feature">
                        <h2>Precision Agriculture</h2>
                        <p>Smart e-Crop's precision agriculture capabilities ensure that crops receive the right amount of water, nutrients, and care at the right time, maximizing growth and minimizing waste.</p>
                    </div>
                    <div className="feature">
                        <h2>Sustainable Practices</h2>
                        <p>By monitoring environmental conditions and adjusting inputs accordingly, Smart e-Crop supports sustainable farming practices that protect natural resources and promote long-term soil health.</p>
                    </div>
                    <div className="feature">
                        <h2>Labor Efficiency</h2>
                        <p>Automated systems reduce the need for manual labor, allowing farmers to focus on strategic tasks and improving overall farm management.</p>
                    </div>
                    <div className="feature">
                        <h2>Market Competitiveness</h2>
                        <p>With enhanced traceability and quality assurance, Smart e-Crop gives farmers a competitive edge in the marketplace, meeting consumer demand for transparency and sustainability.</p>
                    </div>
                </div>
                <div className="col-md-6 image-section">
                    <img src={speech} className='w-100' loading="lazy" data-aos="fade-up" alt=""/>
                </div>
            </div>
        </div>
      </section>
      <div className="container bgggg">
        <p className="team-skills-one__col-text">
          Smart eCrop is the embodiment of smart farming, offering a comprehensive solution that integrates technology and agriculture seamlessly. Developed by ICAR-CTCRI and marketed by Precision Grow, Smart eCrop is poised to revolutionize the farming industry, making smart farming accessible and effective for all.
        </p>
        <p className="team-skills-one__col-text">Embrace the future of agriculture with Smart eCrop and experience the benefits of increased productivity, cost savings, sustainability, and improved decision-making.</p>
      </div>
    </div>
  );
};

export default About;
