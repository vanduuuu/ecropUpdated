import React, { useState } from 'react';
import './Interface.css';
import dr from '../../../assets/background/user.png'
import dr1 from '../../../assets/background/farmerr.png'
import dr2 from '../../../assets/background/owner.png'
import dr3 from '../../../assets/background/manager.png'
function Interface() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="interface-page font-merriweather">
                <div className="interfacebg">
                    <div className="interface-title">
                        <h1 className="text-interface fw-bold">e-Crop Interface</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="interface-text">
                    <h1 className="text-center interface-title">Empowering Farming through <br />e-Crop User Roles</h1>
                    <p>e-Crop web interface is the platform which facilitates the management of farming. This interface can also be operated through “Krishi Krithya” mobile app. There are different types of users based on the rights assigned to manage e-Crop. They are:
                    </p>
                </div>
            </div>
            <div className="interface-outer">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-md-5">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <p><b>Admin is the super user of this system, having complete access to all the modules. The rights of Admin are:</b></p>
                                    <ul style={{listStyle:'square'}}>
                                        <li>View and add new e-Crops, locations, users, crops, varieties, soil types
                                        and its composition and fertigation devices.</li>
                                        <li>Set up simulation for crops like cassava, sweet potato, elephant foot yam and any other crop which is added to the system.</li>
                                    </ul>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <p><b>Rights of Device Owner are:</b></p>
                                    <ul style={{listStyle:'square'}}>
                                        <li>View the entire features as shown in Fig.</li>
                                        <li>Add new Farmers type users</li>
                                        <li>Set up simulation</li>
                                        <li>Add or update the fertigation system</li>
                                    </ul>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <p><b>Rights of Farmer are:</b></p>
                                    <ul style={{listStyle:'square'}}>
                                        <li>View the entire feature as shown in the Fig and</li>
                                        <li>Set up simulation.</li>
                                    </ul>
                             
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'manager' ? 'show active' : ''}`}
                                    id="manager"
                                    role="tabpanel"
                                    aria-labelledby="manager-tab"
                                >
                                    <p>The smart farming at farmer’s field can be monitored at different levels of hierarchy from Director of Agriculture at the state level upto the Agricultural Officer at Panchayat level. The Director of Agriculture can view the details of e-Crop based smart farming being performed in every farmer’s field of the state. Similarly the Principal Agriculture Officer can monitor every farmer’s field of the concerned district performing e-Crop based smart farming.</p>
                                    <p>
The Assistant Director of Agriculture and Agriculture Officer can view the details in every farmer’s field under their jurisdiction at the block and panchayat levels respectively.Agriculture Officer is the device owner who has the right to add new farmers under his jurisdiction to the interface.

</p> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                                        id="home-tab"
                                        onClick={() => handleTabClick('home')}
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected={activeTab === 'home'}
                                    >
                                        Admin
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                        id="profile-tab"
                                        onClick={() => handleTabClick('profile')}
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected={activeTab === 'profile'}
                                    >
                                        Device Owner
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                                        id="contact-tab"
                                        onClick={() => handleTabClick('contact')}
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected={activeTab === 'contact'}
                                    >
                                        Farmer
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        className={`nav-link ${activeTab === 'manager' ? 'active' : ''}`}
                                        id="manager"
                                        onClick={() => handleTabClick('manager')}
                                        role="tab"
                                        aria-controls="manager"
                                        aria-selected={activeTab === 'manager'}
                                    >
                                        Manager
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <img src={dr} alt="" loading="lazy"/>
                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                  <img src={dr2} alt="" loading="lazy"/>

                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                  <img src={dr1} alt="" loading="lazy"/>

                                </div>
                                <div
                                    className={`tab-pane fade ${activeTab === 'manager' ? 'show active' : ''}`}
                                    id="manager"
                                    role="tabpanel"
                                    aria-labelledby="manager-tab"
                                >
                                         <img src={dr3} alt="" loading="lazy"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Interface;
