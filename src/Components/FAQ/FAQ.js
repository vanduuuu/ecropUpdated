 
import './FAQ.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
function FAQ() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
        });
      }, []);
    
    return (
    <section id="faq" class="faq section-bg faq-bg">
    <div class="container">

      <div class="section-title">
        <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
        
      </div>

      <div class="faq-list">
        <ul>
          <li data-aos="fade-up">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What is an eCrop?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
              <p>
              An eCrop is a tool that uses GPS and other technologies to monitor and manage various aspects of farming operations. This includes tracking the location of equipment, monitoring environmental conditions, and managing livestock movements.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="100">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">How does an agricultural tracking device work?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
              <p>
              These devices typically use GPS technology to determine location data and can include sensors to monitor environmental conditions such as temperature, humidity, and soil moisture. The data is transmitted to a central system where it can be analyzed and used for decision-making.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">What are the benefits of using an agricultural tracking device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
              <p>
              Benefits include improved resource management, increased efficiency, enhanced productivity, better crop management, real-time monitoring, and reduced operational costs. It helps farmers make data-driven decisions to optimize their farming practices.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Are agricultural tracking devices compatible with existing farm management software?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
              <p>
              Many eCrop device is designed to be compatible with popular farm management software. It is important to check the specifications and compatibility details provided by the manufacturer to ensure seamless integration.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">What kind of data can be collected by these devices?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
              <p>
              These devices can collect a variety of data including location, speed, direction, temperature, humidity, soil moisture, and other environmental parameters. This data is essential for comprehensive farm management and optimization.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-6" class="collapsed">What is the cost of this device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-6" class="collapse" data-bs-parent=".faq-list">
              <p>
              To know about the cost contact us.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-7" class="collapsed">Does this device work in cloudy weather?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-7" class="collapse" data-bs-parent=".faq-list">
              <p>
              Yes, this device can efficiently work in cloudy weather.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-8" class="collapsed">How is the data from the tracking devices accessed and used?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-8" class="collapse" data-bs-parent=".faq-list">
              <p>
              Data from tracking devices is usually transmitted to a central server or cloud-based platform. Farmers can access this data through web applications or mobile apps, where it can be visualized, analyzed, and used to make informed decisions.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-9" class="collapsed">Dof an agricultural tracking device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-9" class="collapse" data-bs-parent=".faq-list">
              <p>
              The battery life of an agricultural tracking device depends on the device’s features and usage patterns. Some devices are designed for long-term deployment and can last several months on a single charge, while others may need more frequent recharging.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-10" class="collapsed">How durable is eCrop device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-10" class="collapse" data-bs-parent=".faq-list">
              <p>
              eCrop device is designed to withstand harsh environmental conditions. They are typically rugged, waterproof, and resistant to dust and shocks, ensuring reliable operation in various farming environments.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-11" class="collapsed">What should I consider when choosing an agricultural tracking device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-11" class="collapse" data-bs-parent=".faq-list">
              <p>
              When choosing an agricultural tracking device, consider factors such as compatibility with existing systems, data accuracy, battery life, durability, ease of use, data access methods, and subscription fees. Additionally, consider the specific needs of your farming operations.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-12" class="collapsed">Can these devices help in complying with agricultural regulations?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-12" class="collapse" data-bs-parent=".faq-list">
              <p>
              Yes, by providing detailed records and real-time data, agricultural tracking devices can help farmers comply with regulatory requirements related to resource usage, environmental impact, and animal welfare.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-13" class="collapsed">How can I get technical support for my agricultural tracking device?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-13" class="collapse" data-bs-parent=".faq-list">
              <p>
              The manufacturer or service provider usually provides technical support for agricultural tracking devices. Support can include troubleshooting, software updates, and user training. Always ensure that you can access reliable customer support when choosing a device.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <Link data-bs-toggle="collapse" data-bs-target="#faq-list-14" class="collapsed">Is This device patented?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></Link>
            <div id="faq-list-14" class="collapse" data-bs-parent=".faq-list">
              <p>
              Yes, eCrop is a developed and patented device by ICAR CTCRI.
              </p>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </section>
  )
}

export default FAQ