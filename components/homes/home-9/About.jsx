import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function About() {
  return (
    <section className="about-us-area tmp-section-gapTop" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <h2 className="title split-collab wow fadeInUp">
                  Ensuring excellence through rigorous compliance standards
                  <br />
                </h2>
                <p className="description wow fadeInUp">
                  Founder & Principal Consultant BYST Security LLC I started
                  BYST Security LLC, which stands for “Before You Spend
                  Thousands,” because I believe cybersecurity doesn't always
                  require expensive tools or large budgets. Many times, the
                  right advice, smarter processes, or stronger configurations
                  can make all the difference without breaking the bank. With
                  14+ years of experience in cybersecurity and IT audit, I've
                  helped businesses, universities, and non-profits protect their
                  systems and meet compliance standards like SOC 2, ISO 27001,
                  HIPAA, PCI DSS, and more. At BYST Security, my focus is
                  simple: help organizations stay secure, compliant, and
                  confident—while keeping solutions practical and cost
                  effective. My mission is to make cybersecurity something that
                  empowers your business, not something that drains it.
                </p>
              </div>
              <div className="about-us-section-card row g-5"></div>
              <div className="about-btn mt--40 wow fadeInUp">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  href={`/about`}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card wow fadeInUp">
                <h2 className="counter card-title">
                  <OdometerComponent max={15} /> +
                </h2>
                <p className="card-para">years of experience</p>
              </div>
              <div className="design-card wow fadeInUp">
                <div className="card-info">
                  <h3 className="card-title">Mission</h3>
                  <p className="card-para">
                    The mission is clear: make cybersecurity practical,
                    affordable, and effective before you spend thousands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
