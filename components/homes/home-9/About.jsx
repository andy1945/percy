import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function About() {
  return (
    <section className="about-us-area tmp-section-gapTop" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card wow fadeInUp">
                <h2 className="counter card-title">
                  <OdometerComponent max={10} /> +
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
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title wow fadeInUp">
                  <span className="subtitle">About Me</span>
                </div>
                <h2 className="title split-collab wow fadeInUp">
                  Securing Businesses. Enabling Compliance Building Trust <br />
                </h2>
                <p className="description wow fadeInUp">
                  Hey there! I'm passionate about cybersecurity and IT audits.
                  With a solid background in governance, risk, and compliance,
                  I've worked with various organizations, from healthcare to
                  finance, to help them enhance their security measures, meet
                  strict compliance requirements, and smoothly transition to the
                  cloud.
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
                      Design and execute comprehensive security compliance programs for organizations, enabling companies to be ready for evaluation for both cloud and on-premises systems against SOC 2, ISO 27001/2, HIPAA, NIST 800-53, PCI DSS, CMMC, and HITRUST requirements.
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
                        Governance, Risk, & Compliance (GRC)
                      </h3>
                    </div>
                    <p className="card-para">
                      Implement GRC frameworks that drive measurable outcomes in risk reduction, control maturity, and audit success for businesses of all sizes
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
        </div>
      </div>
    </section>
  );
}
