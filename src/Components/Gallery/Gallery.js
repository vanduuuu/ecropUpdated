import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';
import gallery1 from '../../assets/img/36_Transparency.jpg'
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (

    <div class="grid-gallary">
    <div class="grid-item">
    <a href="assets/images/img/1_Adaptation.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/2_Carbon_removal.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/agro.png" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/banner2.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/banner1.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/banner3.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/bg-img.jpg" data-lightbox="gridImage">
        <img src={ gallery1}alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/images.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/grass-flower-morning.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
    <div class="grid-item">
    <a href="assets/images/img/ecbsf-service1.jpg" data-lightbox="gridImage">
        <img src={ gallery1} alt=""/>
    </a>
    </div>
</div>
     
  );
};

export default Gallery;