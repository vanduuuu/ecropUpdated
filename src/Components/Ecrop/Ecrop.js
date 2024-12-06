import React from "react";
import "./Ecrop.css";
import ecropleftimg from "../../assets/img/ecrop-overview.webp";
import floral1 from "../../assets/img/floral1.webp";
import appimg from "../../assets/img/app.webp";
import admin from "../../assets/background/user.png";
import downer from "../../assets/background/owner.png";
import farmer from "../../assets/background/farmerr.png";
import manager from "../../assets/background/manager.png";
import adminicon from "../../assets/shapes/adminicon.png";
import farmericon from "../../assets/shapes/farmericon.png";
import managericon from "../../assets/shapes/managericon.png";
import deviceowner from "../../assets/shapes/deviceowner.png";
import ecroppP from '../../assets/background/EcroppP.webp';
function Ecrop() {
  return (
    <>
      <div className="hero-section container-fixed">
        <img src={ecroppP} alt="ecrop device" className="img-fluid" loading="lazy" />
      </div>
      <div className="ecrop-info-div">
        <div className="container">
          <h1>eCrop - Your Own Agriculture Assistant</h1>
          <p>
            Present day food production is not sufficient to achieve zero
            hunger, especially in the third world countries where food demand is
            increasing continuously for the ever-growing population. With the
            cultivatable area shrinking in these regions, achieving higher
            productivity from the available genetic stock is crucial. Addressing
            individual crops and applying required inputs in precisely
            sufficient quantities leads to increased production and minimizes
            environmental loss. The gap between potential and achieved yield is
            generally wide, and narrowing this gap is a challenging task to meet
            future food requirements. Smart farming technology, which integrates
            technological advances in information technology with agriculture,
            is the best strategy to reduce this gap. ICAR-CTCRI has developed an
            IoT device called Electronic Crop (e-Crop) for smart farming by
            simulating crop growth in real-time. This device works with crop
            simulation, real-time weather, and soil data collected by sensors.
          </p>
        </div>
      </div>
      <div className="container-fluid pt-3 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="left-img-div">
                <img
                  src={ecropleftimg}
                  alt="e-Crop Overview"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex align-items-center">
              <div>
                <h2 className="display-4">e-Crop: An Overview</h2>
                <p>
                  e-Crop is a weatherproof electronic device developed for
                  working in any terrain under various climatic conditions. The
                  device consists of a main control unit to which sensors
                  collecting various soil and weather parameters are connected.
                  The data collected by the device include:
                </p>
                <ol>
                  <div class="row">
                    <div class="col-md-4">
                      <li>Temperature</li>
                      <li>Wind velocity</li>
                      <li>Humidity </li>
                      <li>Solar radiation </li>
                    </div>
                    <div class="col-md-4">
                      <li>Wind direction </li>
                      <li>Rainfall</li>
                      <li>Soil moisture</li>
                      <li>Geo-coordinates</li>
                    </div>
                  </div>
                </ol>
                <p>
                  The microcontroller inside the control unit coordinates the
                  clock, initiates the internet connection, and collects data
                  from different sensors. A web interface is used for managing
                  smart farming using e-Crop, allowing users to add crops,
                  fertilizers, soil types, locations, new e-Crops, fertigation
                  devices, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------------------ */}

      <div className="outer-sliderhere">
        <div className="container">
          <div className="ecrop-inter-out">
            <h1 className="display-4">e-Crop Interface</h1>
            <p>
              The e-Crop web interface is the platform facilitating the
              management of farming. This interface can also be operated through
              the "Krishi Krithya" mobile app. Different types of users have
              specific rights to manage e-Crop:
            </p>
          </div>
          <div id="carouselExampleIndicators" class="carousel slide ecrop-sliderr">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner ecrop-sliderr">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-md-12 col-lg-6 order-md-2 order-2">
                    <h1>An IoT Solution for Precision Farming</h1>
                    <div className="ecrop-sliderr-img e-infohere">

                      <img src={admin} class="d-block w-100" loading="lazy" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 e-infohere order-md-1 order-1">
                    <div className="ecrop-sliderr-info">
                      <div>
                        <span><img src={adminicon} alt="" loading="lazy" /></span>
                        <span>Admin</span>
                      </div>

                      <h3 className="fw-bold my-3">Device Owners can:</h3>
                      <ul>
                        <li>Viewing and adding new e-Crop, locations, users, crops, varieties, soil types, and fertigation devices.</li>
                        <li>Setting up simulations for crops like cassava, sweet potato, elephant foot yam, and others added to the system.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-12 col-lg-6 order-md-2 order-2">
                    <h1>An IoT Solution for Precision Farming</h1>
                    <div className="ecrop-sliderr-img e-infohere">

                      <img src={downer} class="d-block w-100" loading="lazy" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 e-infohere order-md-1 order-1">
                    <div className="ecrop-sliderr-info">
                      <div>
                        <span><img src={deviceowner} alt="" loading="lazy" /></span>
                        <span>Owner</span>
                      </div>

                      <h3 className="fw-bold">Device Owners can:</h3>
                      <ul>
                        <li>View all features.</li>
                        <li>Add new Farmer-type users.</li>
                        <li>Set up simulations.</li>
                        <li>Add or update the fertigation system.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-12 col-lg-6 order-md-2 order-2">
                    <h1>An IoT Solution for Precision Farming</h1>
                    <div className="ecrop-sliderr-img e-infohere">

                      <img src={farmer} class="d-block w-100" loading="lazy" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 e-infohere order-md-1 order-1">
                    <div className="ecrop-sliderr-info">
                      <div>
                        <span><img src={farmericon} alt="" loading="lazy" /></span>
                        <span>Farmer</span>
                      </div>

                      <h3 className="fw-bold">Farmers can:</h3>
                      <ul>
                        <li>View all features.</li>
                        <li>Set up simulations.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-12 col-lg-6 order-md-2 order-sm-2 order-2">
                    <div className="ecrop-sliderr-img e-infohere">

                      <img src={manager} class="d-block w-100" loading="lazy" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 e-infohere order-md-1 order-sm-1 order-1">
                    <div className="ecrop-sliderr-info">
                      <div>
                        <span><img src={managericon} alt="" loading="lazy" /></span>
                        <span>Manager</span>
                      </div>
                      <p><b>Smart farming</b> can be monitored at different hierarchy levels from the Director of Agriculture at the state level to the Agricultural Officer at the Panchayat level. Directors can view <b>e- Crop-based smart farming</b> details for every farmer's field in the state. Principal Agriculture Officers can monitor fields in their district, and Assistant Directors and Agriculture Officers can view details at block and Panchayat levels, respectively. Agriculture Officers, as device owners, can add new farmers to the interface under their jurisdiction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}

      <div class="hero-section1">
        <div class="container text-center text-white">
          <h1 class="display-4 text-white mb-5">Management of Farm Using e-Crop</h1>
          <p>
            One of the core features of the eCrop system is its ability to
            simulate crop growth in real-time. Setting up a simulation involves
            entering data on the crop, soil type, location, and planting date,
            among other parameters.
          </p>
        </div>
      </div>
      <div class="content-section1 bg-green">
        <div class="work-learn-one-imgg">
          <img src={floral1} class="w-100" loading="lazy" alt="" />
        </div>
        <div class=" py-5">
          <div class="row worek-learn-onee">
            <div class="col-lg-6 col-md-9 mb-4">
              <div class="content-box p-lg-4 pt-2 text-white">
                <h2 class="h4">
                  Step 1: Adding Farmers and Setting Up Simulations
                </h2>
                <p>
                  The Device Owner adds new farmers for the e-Crop device under
                  their purview and sets up new simulations for these farmers.
                  This includes crops, soils, varieties, and devices already
                  added by the Admin.
                </p>
              </div>
            </div>

            <div class="col-lg-6 col-md-9 mb-4">
              <div class="content-box p-lg-4  text-white">
                <h2 class="h4">Step 3: Input Management</h2>
                <p>
                  Users can add information regarding water, N, P, and K
                  available in the soil at planting and those added later.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-9 mb-4">
              <div class="content-box p-lg-4  text-white">
                <h2 class="h4">Step 2: Creation of Simulation ID</h2>
                <p>
                  A unique Simulation ID is created when a new simulation is set
                  up for the crop, variety, location, planting date, e-Crop
                  device, cultivated area, and farmer. This ID is used for
                  executing the simulation in a single step. Required parameters
                  include:
                </p>
                <ol>
                  <li>Crop</li>
                  <li>Crop area</li>
                  <li>Variety</li>
                  <li>Initial values of N, P, K, and water in the soil</li>
                  <li>Location (Latitude, Longitude, Altitude)</li>
                  <li>Date of planting</li>
                  <li>Duration</li>
                  <li>Field ID</li>
                  <li>Soil type</li>
                  <li>e-Crop ID</li>
                  <li>Farmer ID</li>
                </ol>
              </div>
            </div>
            <div class="col-lg-6 col-md-9 mb-4">
              <div class="content-box p-lg-4  text-white">
                <h2 class="h4">Step 4: Simulation Results</h2>
                <p>
                  Each day, the crop growth is simulated using the web interface
                  or mobile app with the Simulation ID. The generated advisory
                  is sent to the farmer's mobile and other included numbers. The
                  advisory includes information on:
                </p>
                <ol>
                  <li>Date of planting</li>
                  <li>Variety of crop</li>
                  <li>Potential yield achievable to date</li>
                  <li>Water, Nitrogen, Phosphorous, and Potassium required</li>
                  <li>Normal yield predicted</li>
                  <li>Cultivated area</li>
                </ol>
                <p>
                  The results are sent via SMS, detailing water and fertilizer
                  requirements for that day, the next week, and the remaining
                  crop duration in one dose. This device aids in real-time agro-
                  advisory to reduce yield gaps and achieve targeted yields,
                  promoting the application of fertilizers as per demand in
                  smaller, frequent doses, reducing losses and increasing yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outer-cont-devicee">
        <div className="container py-5">
          <div className="row my-5 align-items-center">
            <div className="col-lg-5 mb-5 col-md-12 text-center text-md-left">
              <h2 className="display-4">Applications of the Device</h2>
              <p>
                e-Crop can forecast crop yield more accurately at local, regional,
                and national levels. Forecasts sent by e-Crop devices to a
                centralized database can be compiled for national, state, or
                regional crop yield/status predictions. The device provides
                real-time information to farmers, even if they are far from their
                fields.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 offset-lg-1 mx-auto my-5 text-center app-img">
              <img
                src={appimg}
                alt="Applications of the Device"
                className="img-fluid rounded-circle custom-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ecrop;
