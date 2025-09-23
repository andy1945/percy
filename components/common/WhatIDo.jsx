import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhatIDo() {
  return (
    <section className="tmp-section-gapBottom">
      <div className="container">
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 wow fadeInUp">
                  What I Do
                  <span>
                    <Image
                      alt="custom-line"
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title fw-bold">
                        Cloud Security Readiness
                      </h3>
                      <p className="ex-para">
                        Assessing and preparing SaaS platforms and web
                        applications for secure deployment in AWS and Azure,
                        aligned with SOC 2 and NIST standards.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title fw-bold">
                        Audit & Compliance Leadership
                      </h3>
                      <p className="ex-para">
                        Leading full-cycle compliance programs — SOC 1, SOC 2,
                        ISO 27001, HIPAA, HITRUST, PCI DSS — including internal
                        readiness, evidence collection, remediation, and
                        external auditor coordination.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title fw-bold">
                        Governance, Risk, & Control (GRC)
                      </h3>
                      <p className="ex-para">
                        Implementing GRC frameworks that drive measurable
                        outcomes in risk reduction, control maturity, and audit
                        success — for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title fw-bold">
                        Security Assessments & Remediation
                      </h3>
                      <p className="ex-para">
                        Identifying risks, evaluating control effectiveness, and
                        designing remediation strategies that support
                        operational and regulatory excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    </section>
  );
}
