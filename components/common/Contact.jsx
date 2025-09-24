"use client";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHAComponent from "./ReCAPTCHA";

export default function Contact({ parentClass = "get-in-touch-area tmp-section-gapTop" }) {
  const form = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = (value) => setIsVerified(!!value);

  const sandMail = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please verify you are not a robot.");
      return;
    }

    try {
      const res = await emailjs.sendForm(
        "service_cyobi0y",
        "template_4nbexqj",
        form.current,
        "D79JdTqxXVCcQBXL4"
      );

      if (res.status === 200) {
        toast.success("Message Sent successfully!");
        if (form.current) form.current.reset();
      } else {
        toast.error("Ops Message not Sent!");
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className={parentClass} id="contacts">
      <div className="container">
        <div className="get-in-touch-wrapper tmponhover">
          <div className="row g-3 align-items-center">
            <div className="col-lg-5">
              <div className="contact-inner">
                <ul className="ft-link v2">
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                    <span className="ft-icon">
                      <i className="fa-solid fa-envelope" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">E-mail:</h4>
                      <a href="#">info@bystsecurity.com</a>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon">
                      <i className="fa-solid fa-phone" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Phone:</h4>
                      <a href="tel:+1267688812">+1 267 688812</a>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <span className="ft-icon">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Location:</h4>
                      <a href="#">
                        100 South Juniper Street,
                        <br />
                        5th floor,
                        <br />
                        Philadelphia, PA 19109
                      </a>
                    </div>
                  </li>
                  <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <span className="ft-icon">
                      <i className="fa-solid fa-globe" />
                    </span>
                    <div className="ft-link-wrap">
                      <h4 className="link-title">Website:</h4>
                      <a href="https://bystsecurity.com/">https://bystsecurity.com/</a>
                    </div>
                  </li>
                </ul>

                <div className="social-link footer">
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/percy-r-a7b7b3192/">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="https://x.com/Percyrwandarugali">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-inner">
                <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="title">Book free consultation </span>
                </div>

                <div className="contact-form">
                  <div className="contact-card">
                    

                    <div id="form-messages" className="error" />

                    <form className="tmp-dynamic-form" id="contact-form" ref={form} onSubmit={sandMail}>
                      <div className="contact-form-wrapper row">
                        <div className="col-lg-6">
                          <label htmlFor="contact-name" className="input-label">Your Name</label>
                          <input className="input-field" name="name" id="contact-name" type="text" required placeholder="" />
                        </div>

                        <div className="col-lg-6">
                          <label htmlFor="contact-phone" className="input-label">Phone Number</label>
                          <input className="input-field" name="phone" id="contact-phone" type="tel" placeholder="" />
                        </div>

                        <div className="col-lg-6">
                          <label htmlFor="contact-email" className="input-label">Your Email</label>
                          <input className="input-field" id="contact-email" name="email" type="email" required placeholder="" />
                        </div>

                        <div className="col-lg-6">
                          <label htmlFor="subject" className="input-label">Subject</label>
                          <input className="input-field" type="text" id="subject" name="subject" placeholder="" />
                        </div>

                        <div className="col-lg-12">
                          <label htmlFor="contact-message" className="input-label">Your Message</label>
                          <textarea className="input-field" name="message" id="contact-message" required rows={4} placeholder=""></textarea>
                        </div>

                        <div className="col-lg-12">
                          <ReCAPTCHAComponent onVerify={handleVerification} parentClass={"mb-4"} />
                          <div className="tmp-button-here">
                            <button className="tmp-btn contact-submit radius-round w-100" name="submit" type="submit" id="submit" disabled={!isVerified}>
                              <span className="btn-text">Send Message</span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}