import React from "react";
import "./ApplicationOfDevice.css";
import leaf from "../../../assets/shapes/food-img1-1.png";
import application_device from "../../../assets/background/ecrop-vdo-here.webp";
import speech from "../../../assets/background/spech.webm";
import Capabilities from '../../../assets/img/ee.webp';
import Farming  from '../../../assets/img/ECROP2.webp';
import Application  from '../../../assets/img/ECROP3.webp';
const ApplicationOfDevice = () => {
  return (
    <>
      <div className="application-body">
        <div class="app-outer-div">     
          <div class="hero-image-app">
            <div class="hero-text">
              <h1>Application Of Device</h1>
              <p className="mx-auto">
                eCrop is at the forefront of agricultural innovation, aiming to
                empower farmers with tools and knowledge to maximize their
                productivity while maintaining sustainability. This advanced
                system, born from the research and expertise of ICAR-CTCRI and
                brought to market by Precision Grow, is designed to address the
                challenges faced by modern agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="hero-text1">
          <p>
            eCrop is at the forefront of agricultural innovation, aiming to
            empower farmers with tools and knowledge to maximize their
            productivity while maintaining sustainability. This advanced system,
            born from the research and expertise of ICAR-CTCRI and brought to
            market by Precision Grow, is designed to address the challenges
            faced by modern agriculture.
          </p>
        </div>
      </div>
      <div className="app-tit">
        <img src={leaf} alt="" loading="lazy"/>
        <h6 className="text-center">INNOVATION INTEGRATION</h6>
      </div>
      <div className="container outer-tit-app">
        <h1>Transforming Crop Yield Forecasting with e-Crop Technology</h1>

        <div className="row my-5">
          <div className="col-lg-6 col-md-12">
            <div className="inner-application-info">
              <h2>Modernizing Farming with Advanced Crop Monitoring</h2>
              <ul>
                <li>
                  Forecasting of yield of the crop can be done more accurately
                  at local, regional and national level.
                </li>
                <li>
                  The forecasts sent by the e-Crop devices installed in
                  different places to the centralized database can be pooled and
                  a national/state/regional level crop yield/status can be
                  obtained by just compiling that information at the desired
                  level for different times in future.
                </li>
                <li>
                  Device gives information to the farmer in the form of SMS
                  about what is happening to the crop even if he is far away
                  from field.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-9 offset-lg-1 offset-md-2">
            <div class="appli-img">
              <div className="app1">
                <h6>Futuristic Farming Innovation Meets Growth</h6>
              </div>
              {/* <video autoPlay muted loop playsInline className="d-block w-100">
                                <source src={application_device} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                            <img src={application_device} alt="" loading="lazy"/>
              <div className="app2">
                <h6 className="text-white">
                  Tech-Driven Agriculture Pioneering Tomorrow's Harvests
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vdo-section-ad">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 mx-auto">
              <video src={speech} controls muted></video>
            </div>
            <div className="col-lg-6">
              <p>
                <b className="bold-txtt">
                  India's Agriculture Minister, Mr. Shivraj Singh Chouhan,
                </b>{" "}
                emphasizes the growing importance of this sustainable farming
                technique. In this video Union Minister explains the importance
                of organic farming emphasizing its importance in today’s world.
                He further highlighted the importance of farming and said that
                agriculture is not mere work but it is worship. He says
                everything else can be produced somewhere else but food can be
                produced only by local farmers. He further added that the Prime
                Minister resolves to increase farmer’s income and become
                self-reliant in producing food and other crops. He said we are
                strategizing farmers’ welfare, and food security and making
                India a “food basket” at international level.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-application">
      <div className="container">
<div className="row ad-app-info">
<div className="col-md-8">
          <h2>Advanced Capabilities of eCrop:</h2>
          <ul>
            <li><span>Data-Driven Decisions:</span> eCrop utilizes sophisticated algorithms to analyze data collected from various sensors. This analysis helps farmers make data-driven decisions about planting, irrigation, fertilization, and harvesting.</li>
            <li><span>Integrated Systems:</span> eCrop can integrate with existing farm management systems, providing a seamless experience for farmers looking to upgrade their operations without overhauling their entire setup.</li>
            <li>
            <span>Weather Forecasting:</span> By incorporating accurate weather forecasting, eCrop assists farmers in planning their activities to avoid adverse weather conditions and make the most of favorable weather windows.
            </li>
            <li>
            <span>Soil Health Monitoring:</span> Continuous soil health monitoring allows farmers to maintain optimal soil conditions, preventing issues like nutrient depletion or soil erosion.
            </li>
            <li>
            <span>Crop Health Surveillance:</span> eCrop can detect early signs of pest infestations or diseases, enabling timely interventions and reducing crop losses.
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src={Capabilities} alt="" loading="lazy"/>
        </div>
</div>
      <div className="row ad-app-info">
      <div className="col-md-4">
          <img src={Farming} alt="" loading="lazy"/>
        </div>
        <div className="col-md-8">
          <h2>Impact on Farming Practices:</h2>
          <ul>
            <li><span>Precision Irrigation:</span> With eCrop, water usage can be precisely controlled, ensuring crops receive the exact amount of water they need, which conserves water resources and lowers irrigation costs.</li>
            <li><span>Targeted Fertilization:</span> By monitoring soil nutrient levels, eCrop enables targeted fertilization, ensuring that crops receive the necessary nutrients without overuse of fertilizers.</li>
            <li>
            <span>Labor Efficiency:</span> Automated monitoring and alerts reduce the need for constant manual oversight, freeing up labor for other essential tasks.
            </li>
            <li>
            <span>Yield Optimization:</span> Through precise monitoring and management, eCrop helps farmers achieve optimal crop yields, improving both quantity and quality of produce.
            </li>
          </ul>
        </div>
      </div>
      <div className="row ad-app-info">
       <div className="col-md-12">
          <h2>Real-World Applications:</h2>
          <p>eCrop is not just a theoretical solution but has been tested and implemented in various agricultural settings. Farmers using eCrop have reported significant improvements in their crop management processes, leading to better yields and reduced operational costs. The system's adaptability makes it suitable for different types of crops and farming conditions, from small- scale farms to large agricultural enterprises.</p>
          </div>
          </div>
       <div className="row ad-app-info">
       <div className="col-md-8">

          <h2>Future Prospects:</h2>
          <p>The ongoing development of eCrop includes enhancements in artificial intelligence and machine learning, aiming to provide even more accurate predictions and recommendations. Future updates will also focus on expanding the range of crops supported and integrating with other emerging agricultural technologies.</p>
          <p>eCrop, a product of ICAR-CTCRI's research excellence and Precision Grow's market expertise, is a game-changer in the agricultural sector. By embracing precision agriculture and sustainable practices, eCrop offers farmers the tools they need to thrive in an ever-evolving agricultural landscape. This innovation not only boosts productivity but also promotes environmental stewardship, ensuring that agriculture can meet the demands of the future.</p>
          <p>For further information and inquiries, please visit the Precision Grow website or contact your nearest distributor.</p>
        </div>
        <div className="col-md-4">
          <img src={Application} alt="" loading="lazy"/>
        </div>
        </div>
       </div>
      </div>
      
      
    </>
  );
};

export default ApplicationOfDevice;
