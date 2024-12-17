import React, { useEffect } from 'react';
import './Whychooseuse.css';
import croplogo from '../../assets/shapes/food-img1-1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import certificateImage from '../../assets/img/certificate-ecrop.jpg'
function Whychooseuse() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });

    
  }, 
  
 
  []);

  return (
    <>

    <div>
      <div className="container-whychooseuse pt-5 pb-5">
        <div className="text-center whychooseuse-inner" data-aos="fade-up">
          <img className="why-choose-one__chose-icon" src={croplogo} alt="" />
          <h2 className="text-success mb-4 title-whychooseuse">WHY CHOOSE US</h2>
          <h1 className="display-3">e-Crop Revolutionizes <br />Smart Farming</h1>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-leaf fa-2x  home-icon"></i>
                </div>
                <h5 className="card-title">Crop Yield Forecasting</h5>
                <p className="card-text">Accurately predict crop yield at local, regional, and national levels.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-database fa-2x  home-icon"></i>
                </div>
                <h5 className="card-title">Centralized Database Management</h5>
                <p className="card-text">Pool forecasts from various locations for comprehensive crop yield/status reports.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-sms fa-2x  home-icon"></i>
                </div>
                <h5 className="card-title">SMS Notifications</h5>
                <p className="card-text">Send timely updates to farmers about crop conditions, even when they are away from the field.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="fas fa-handshake fa-2x  home-icon"></i>
                </div>
                <h5 className="card-title">Collaboration</h5>
                <p className="card-text">Precision Grow and ICAR launch e-Crop tech, revolutionizing farming for better yields and global food security.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 mb-5 d-none d-md-block" data-aos="fade-up">
          <div className="dot-div">
            <h4 className="mb-4">
              This agricultural solution combines advanced technology with sustainable practices to optimize crop production while minimizing environmental impact.
            </h4>
          </div>
        </div>
      </div>
      <div className="container-manufacturers">
          <h2 className="manufacturers-title">
            We are manufacturers<br/> and marketeers of <br /> e-crop device
          </h2>
       
      </div>
    </div>
  
    <section class="cetificate-bg">
    <div class="container-fluid">
    <div class="row">
                   <div class="col-lg-4 offset-lg-4" data-aos="fade-up">
                                <h4 class="tit-for">Core Features of Smart e-Crop</h4>
                                <p class="team-skills-one__col-text">
                                    </p><ol>
                                        <li><span>Comprehensive Data Collection</span></li>
                                    <li><span>Advanced Analytics</span></li>
                                        <li><span>Automated Systems</span></li>
                                <li><span>Remote Monitoring and Control</span></li>   
                            <li><span>Predictive Maintenance</span></li>    
                            </ol>
                                <p></p>
                   </div>
                   <div class="col-lg-3 offset-lg-0" data-aos="fade-up">
                    <img src={certificateImage} class="w-100" alt="ecrop-certificate"/>
                   </div>
                </div>
    </div>
</section>

     </>
    );
}

export default Whychooseuse;
