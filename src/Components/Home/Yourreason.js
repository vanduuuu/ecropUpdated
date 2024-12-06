import React, { useEffect } from 'react';
import Award from '../../assets/img/EVENT.jpg';
import './Yourreason.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import leaff2 from '../../assets/shapes/food-img1-1.png'

function Yourreason() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <>
          
            <div className="container">
                <div className="in-divv">
                    <div className="h-quot why-choose-one__more-choose--title" data-aos="fade-up">
                        <p>Welcome to the future of agriculture with Smart eCrop, an advanced solution designed to bring smart farming to every field. Developed by the renowned ICAR-CTCRI and brought to market by Precision Grow, Smart eCrop integrates cutting-edge technology with practical farming needs, making smart farming a reality for all.</p>
                    </div>
                </div>
            </div>
            <div className='food-one'>
                <div className="container your-reason">
                    <div className="row">
                        <div className='col-lg-6 col-md-6' data-aos="fade-up">
                            <span>
                                <img src={leaff2} alt="" />
                                <strong className='yur-reason'>YOUR REASON TO CHOSE US</strong>
                            </span>
                            <h2 className="your-reason__title">Precision Grow Advances Smart Farming with <br /> e-CROP</h2>
                            <p className="your-reason__text">Precision Grow (a unit of Tech Visit IT Pvt Ltd) has taken a significant step forward in advancing smart farming technology by collaborating with the Indian Council of Agricultural Research (ICAR). On June 5th, 2024, coinciding with World Environment Day, Precision Grow signed a contract for the manufacturing and marketing of the innovative e-Crop technology. This agricultural solution combines advanced technology with sustainable practices to optimize crop production while minimizing environmental impact.</p>
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='hhh'>
                            <img className='Award-img' src={Award} alt="" data-aos="fade-up"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Yourreason;
