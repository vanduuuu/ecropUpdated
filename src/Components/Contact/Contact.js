import React, { useEffect, useState } from "react";
import AOS from "aos";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "./Contact.css";
import axios from "axios";
import Modal from "react-modal";

// Import images
import contactBanner from '../../assets/background/contact-banner.webp'; 
import indiaFlag from '../../assets/img/in.webp';  
import usaFlag from '../../assets/img/eu.png';  

Modal.setAppElement("#root"); // Required for screen readers to work correctly

const Contact = () => {
  const [otpDisplay, setOtpDisplay] = useState("hidden");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    const script = document.getElementById("otpless-sdk");

    if (script) {
      const callback = (userinfo) => {
        const emailMap = userinfo.identities.find(
          (item) => item.identityType === "EMAIL"
        );

        const mobileMap = userinfo.identities.find(
          (item) => item.identityType === "MOBILE"
        )?.identityValue;

        const token = userinfo.token;

        const email = emailMap?.identityValue;
        const mobile = mobileMap?.identityValue;
        const name = emailMap?.name || mobileMap?.name;

        console.log("User Info:", { email, mobile, name, token });
      };

      window.OTPlessSignin = new window.OTPless(callback);
    }
  }, []);

  const phoneAuth = () => {
    const phone = document.getElementById("phone").value;
    if (!phone) {
      setOtpDisplay("hidden");
      alert("Please enter your number");
      return;
    }
    setOtpDisplay("visible");
    setIsOtpRequested(true);
    window.OTPlessSignin.initiate({
      channel: "PHONE",
      phone: phone,
      countryCode: "+91",
    });
  };

  const verifyOTP = () => {
    window.OTPlessSignin.verify({
      channel: "PHONE",
      phone: document.getElementById("phone").value,
      otp: document.getElementById("otp-input").value,
      countryCode: "+91",
    })
      .then((response) => {
        if (response.success) {
          setIsOtpVerified(true);
          console.log("OTP Verified Successfully");
        } else {
          console.error("OTP Verification Failed");
          alert("Incorrect Credentials");
          setIsOtpVerified(false);
        }
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setIsOtpVerified(false);
      });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    domain: "ecrop", // Add the default value for domain here
  });
  const [status, setStatus] = useState({ success: false, error: null });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const handleOtpChange = (e) => {
    setOtpValue(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: false, error: null });

    if (!isOtpVerified) {
      alert("Please verify the OTP before submitting the form.");
      return;
    }

    try {
      // Include the domain value in the request payload
      const response = await axios.post(
        "https://ecbsf-backend.azurewebsites.net/api/contact/send",
        { ...formData, domain: formData.domain }
      );

      if (response.status === 200) {
        setStatus({ success: true, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          domain: "ecrop",
        });
        setOtpValue("");
        setIsOtpVerified(false);
        setIsOtpRequested(false);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setStatus({
        error: "Something went wrong. Please try again later.",
        success: false,
      });
    }
  };

  return (
    <>
      <section>
        <div className="bg-banner-c">
          <img
            src={contactBanner}
            alt="Contact Banner"
            loading="lazy"
          />
        </div>
      </section>
      <main>
        <section id="contact" className="contact section-bg custom-bg">
          <div className="container" data-aos="fade-up">
            <div className="text-center">
              <h6>SAY HELLO TO US</h6>
              <h1>Reach out and connect</h1>
              <p>
                Reach out and connect with us! We're eager to hear from you.
                Whether you have a burning question, a brilliant idea, or simply
                want to say hello, we're here to listen. Get in touch with our
                friendly team through email, phone, or by filling out our online
                contact form. You can also connect with us on social media for
                the latest updates and engaging discussions. We value your
                feedback and look forward to building a lasting relationship
                with you.
              </p>
            </div>
            <div className="C-info-here">
              <div className="row">
                <div className="col-md-6">
                  <h6>Address</h6>
                  <h5>Corporate Office:</h5>
                  <p>
                  Unit No 22, Building No. 2(A3), Sector 1, Millennium Business Park, Mahape, Navi Mumbai, 400710
                  </p>
                  <h5>Regd Office:</h5>
                  <p>
                  B-155, Ground Floor, Vashi Plaza, Sector-17, Vashi, Mumbai, 400703
                  </p>
                  <h6>Contact Information</h6>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <img
                            className="imgh"
                            src={indiaFlag}
                            loading="lazy"
                            alt="India Flag"
                          />
                          <h6>India</h6>
                        </li>
                        <li>
                          <span>PHONE</span> : +91 22 48888888 / 46165798
                        </li>
                        <li>
                          <span>MOBILE</span> : +91 8097283444
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <img
                            className="imgh"
                            src={usaFlag}
                            loading="lazy"
                            alt="USA Flag"
                          />
                          <h6>USA</h6>
                        </li>
                        <li>
                          <span>PHONE</span> :  +1 424-239-0105
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-4">
                      <h1>Send us an email</h1>
                      <h5>
                        <span>mail@precisiongrow.co.in</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="map-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101433.85411961254!2d73.05261854442173!3d19.127030012503543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1711518378438!5m2!1sen!2sin"
                      width="100%"
                      height="550"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 mx-auto">
              <form
                onSubmit={handleSubmit}
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <button
                    className="requestOtp"
                    type="button"
                    onClick={phoneAuth}
                  >
                    Request OTP
                  </button>
                  {isOtpRequested && (
                    <div id="otp-section" className={`otp-${otpDisplay}`}>
                      <input
                        className="enterOtp"
                        id="otp-input"
                        placeholder="Enter OTP"
                        value={otpValue}
                        onChange={handleOtpChange}
                      />
                      <button
                        className="ms-2"
                        type="button"
                        onClick={verifyOTP}
                      >
                        Verify OTP
                      </button>
                    </div>
                  )}
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Your additional messages..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="my-3">
                  {status.error && (
                    <div className="error-message">{status.error}</div>
                  )}
                  {status.success && (
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                </div>
                <div className="text-center">
                  {isOtpVerified ? (
                    <button type="submit" disabled={status.loading}>
                      Send Message
                    </button>
                  ) : (
                    <p>Please verify OTP to submit the form.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Modal for success message */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Success Message"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Contact;
