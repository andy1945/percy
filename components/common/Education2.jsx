import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";
export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title wow fadeInUp">
            <span className="subtitle">Education &amp; Experience</span>
          </div>
          <h2 className="title split-collab wow fadeInUp">
            Empowering Creativity <br />
            through
          </h2>
          <p className="description section-sm wow fadeInUp">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <h2 className="custom-title mb-32 wow fadeInUp">
          Education
          <span>
            <Image
              alt="custom-line"
              src="/assets/images/custom-line/custom-line.png"
              width={81}
              height={6}
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover wow fadeInUp`}
              >
                <h4 className="edu-sub-title">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
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
                      <h3 className="ex-title">Cloud Security Readiness</h3>
                      <p className="ex-para">
                        Assessing and preparing SaaS platforms and web applications for secure deployment in AWS and Azure, aligned with SOC 2 and NIST standards.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title">Audit & Compliance Leadership</h3>
                      <p className="ex-para">
                        Leading full-cycle compliance programs — SOC 1, SOC 2, ISO 27001, HIPAA, HITRUST, PCI DSS — including internal readiness, evidence collection, remediation, and external auditor coordination.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title">Governance, Risk, & Control (GRC)</h3>
                      <p className="ex-para">
                        Implementing GRC frameworks that drive measurable outcomes in risk reduction, control maturity, and audit success — for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="experience-content wow fadeInUp">
                      <h3 className="ex-title">Security Assessments & Remediation</h3>
                      <p className="ex-para">
                        Identifying risks, evaluating control effectiveness, and designing remediation strategies that support operational and regulatory excellence.
                      </p>
                    </div>
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
