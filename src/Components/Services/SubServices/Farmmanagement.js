import React from "react";
import "./Farmmanagement.css";
import result from '../../../assets/img/sms.jpeg'
import shapevdo from '../../../assets/background/shape-img-vdo.webp'
import img1 from '../../../assets/img/1.webp';
import img2 from '../../../assets/img/2.webp';
import img3 from '../../../assets/img/soil-nutt.webp';
import img4 from '../../../assets/img/4.webp';
const Farmmanagement = () => {
  return (
    <>
      <div className="farmmanagement-page">
        <div className="farmmanagementbg">
          <div className="farmmanagement-title">
            <h1 className="text-management fw-bold">Farm Management</h1>
          </div>
        </div>
      </div>

      <div class="white-gradient"></div>
     <div className="manage-section">
     <div className="container mid-farm-section">
        <div className="row">
          <div className="col-md-6">
          <h1>Management of Farm Using e-Crop</h1>

            <p>
              Harnessing the power of our web interface and mobile app, daily
              crop simulations are conducted using the assigned Simulation ID.
              This dynamic process ensures real-time insights into crop growth
              and development.
            </p>
            <p>
              Advisories generated from these simulations are then promptly
              dispatched to farmers' mobile devices, providing invaluable
              insights into crucial aspects such as planting date, predicted
              yield, crop variety, cultivated area, and required nutrient
              inputs. With this comprehensive advisory at their fingertips,
              farmers are empowered to make informed decisions, optimizing their
              farming practices for optimal results.
            </p>
          </div>
          <div className="col-md-6 farm-manag-out">
            <div className="farm-service1">
              
              <img src={shapevdo} alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
     </div>
      <div className="farm-step">
            <div className="container">
                <div className="farm-circle"></div>
                <h2>Steps For Farm Management</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="in-farm-step">
                            <img src={img1} alt="" loading="lazy"/>
                            <div className="in-cont-div in-cont-1">
                            <h1 className="stepss">1</h1>
                                <h4 className="text-white">Farmer Onboarding</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-2">
                        <p>Device Owner adds new farmers for the e-Crop device coming under his purview. Then set up a new simulation for these farmers for their scenarios of crops, soils, varieties, devices etc which were already added by the Admin,.</p>
                    </div>
                    </div>
                    </div>
                    <div className="container">
                                      <div className="row">
              <div className="col-lg-6 ordr1">
                        <p>Creation of SimulationID When a new simulation is setup for the crop, variety, location, date of planting, e-Crop device, cultivated area and farmer, a unique SimulationID is created, which can be used later for executing the simulation in a single step. For each simulation, unique simulationID is created . The parameters required for generating this ID are:</p>
                        <div class="farm-list col-md-12">
                                            <div class="row ul-list">
                                            <div class="col-md-3">
                                                <ul>
                                                    <li>Crop</li>
                                                    <li>Date of planting</li>
                                                    <li>Soil Type</li>
                                                    <li>Crop Area</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3 offset-md-1">
                                                <ul>
                                                    <li>Duration</li>
                                                    <li>e-Crop ID</li>
                                                    <li>Variety</li>
                                                    <li>Field ID</li>
                                                </ul>
                                            </div>
                                            <div class="col-md-5">
                                            <ul>
                                            <li>Farmer ID</li>
                                            <li>Initial values of N,P,K and water in the soil.</li>
                                            <li>Location(Latitude, Longitude, Altitude)</li>
                                            </ul>
                                            </div>
                                            </div>
                                           </div>
                    </div>
                    <div className="col-lg-4  offset-lg-2 ordr2">
                        <div className="in-farm-step">
                            <img src={img2} alt="" loading="lazy"/>
                            <div className="in-cont-div in-cont-2">
                            <h1 className="stepss">2</h1>
                                <h4 className="text-white">SimulationID Generation</h4>
                            </div>
                        </div>
                    </div>
              </div>
                   
                </div>                
                <div className="container">
                <div className="farm-circle"></div>
                <div className="row">
                    <div className="col-lg-4 ordr2">
                        <div className="in-farm-step">
                            <img src={img3} alt="" loading="lazy"/>
                            <div className="in-cont-div in-cont-1">
                            <h1 className="stepss">3</h1>
                                <h4 className="text-white">Soil Nutrient Input</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-2 ordr1">
                        <p>Input management In this section the user can add the information regarding the water, N,P and K which were available in soil at the time of planting as well as that added during planting and at later stages.</p>
                    </div>
                    </div>
                    </div>
                    <div className="container">
                                      <div className="row">
              <div className="col-lg-6 ordr1">
                        <p>Results of Simulation Each day the crop growth is simulated using the web interface/mobile app using this simulationID. The advisory generated from the simulation is sent to the mobile of the farmer as well as to other mobile numbers included while creating the simulationID.
The advisory contains the information on:</p>
                                <div class="farm-list col-md-12">
                                        <div class="row ul-list">
                                            <div class="col-md-4">
                                            <ul>
                                            <li>Date of planting</li>
                                            <li>Normal yield predicted</li>
                                            <li>Variety of crop</li>
                                            </ul>
                                            </div>
                                            <div class="col-md-7">
                                            <ul>
                                            <li>Cultivated area</li>
                                            <li>Potential yield achievable as on date</li>
                                            <li>Water, Nitrogen, Phosphorous and Potassium required</li>
                                            </ul>
                                            </div>
                                            </div>
                                        </div>
                    </div>
                    <div className="col-lg-4  offset-lg-2 ordr2">
                        <div className="in-farm-step">
                            <img src={img4} alt="" loading="lazy"/>
                            <div className="in-cont-div in-cont-2">
                            <h1 className="stepss">4</h1>
                                <h4 className="text-white">Daily Crop Simulation</h4>
                            </div>
                        </div>
                    </div>
              </div>
                   
                </div>  
            </div>
            <div className="overview-farm">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Result Overview</h2>
                        <p>Results of execution of simulation reach the farmer’s mobile through SMS. This figure shows the view of SMS (Crop advisory generated by e-Crop) on 10th June 2022.</p>
                                    <ul>
                                      <li>Date of planting, cultivated area, variety, location of field (latitude &amp; longitude), potential yield achieved as on date in Tones.</li>
                                        <li>Advisory part includes water and fertilizer requirements.</li>
                                        <li>Specifies water requirement (Liters) for the day, next one week, and remaining crop duration in one dose.</li>
                                        <li>Fertilizer advisory includes the required amount (kg) of Nitrogen, Phosphorous, and Potassium for the day, next one week, and remaining total crop duration in one dose.</li>
                                        <li>Device can be used for giving real-time agro advisory of any crop to reduce yield gap and achieve targeted yield.</li>
                                        <li>Helps in the application of fertilizers as per demand and in smaller and frequent doses, reducing losses and increasing yield.</li>
                                    </ul>
                    </div>
                    <div className="col-lg-6">
                        <img src={result} alt="" loading="lazy"/>
                    </div>
                </div>
            </div>
            </div>
          
    </>
  );
};

export default Farmmanagement;
