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
                <div className="section-sub-title wow fadeInUp">
                  <span className="subtitle">About Me</span>
                </div>
                <h2 className="title split-collab wow fadeInUp">
                  Securing Businesses. Enabling Compliance Building Trust <br />
                </h2>
                <p className="description wow fadeInUp">
                  Welcome! I’m a cybersecurity and IT audit professional with
                  extensive experience in governance, risk, and compliance. I’ve
                  helped organizations across industries — from healthcare to
                  financial services — strengthen their security postures, meet
                  rigorous compliance standards, and confidently navigate cloud
                  transformations.
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover wow fadeInUp">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Cloud Security Readiness</h3>
                    </div>
                    <p className="card-para">
                      Assessing and preparing SaaS platforms and web
                      applications for secure deployment in AWS and Azure,
                      aligned with SOC 2 and NIST standards.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover wow fadeInUp">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">
                        {" "}
                        IT Risk Automation & Continuous Monitoring
                      </h3>
                    </div>
                    <p className="card-para">
                      Reduced manual effort in IT control monitoring by 20%
                      through automation, GRC tooling, and strategic process
                      alignment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-btn mt--40 wow fadeInUp">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  href={`/about`}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Me</span>
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
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-lock" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">Compliance Standards</h3>
                  <p className="card-para">21 Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
