import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Contact from "@/components/common/Contact";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import Education from "@/components/common/Education";
export const metadata = {
  title:
    "Contact || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header2 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Contact</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-intro-area tmp-section-gapTop">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-me-intro-content text-center">
                  <h2 className="title">Unlock Your Cybersecurity Potential</h2>
                  <p className="description">
                    Take the first step towards securing your business with a
                    complimentary consultation. This session is designed to
                    provide you with a personalized assessment of your
                    cybersecurity posture, identifying potential vulnerabilities
                    and tailored strategies to protect your assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Education />
        <div
          style={{ marginTop: "66px" }}
          className="container tmp-scroll-trigger tmp-fade-in animation-order-2 why-choose-us"
        >
          <h3 className="section-title">Why Choose Us?</h3>
          <p className="section-sub">
            Our focus is on delivering value and building trust. Start with a
            free consultation to experience our commitment to excellence.
          </p>

          <div className="row gy-4 mt-4">
            <div className="col-lg-4 col-md-6">
              <div className="why-card">
                <div className="why-icon bg-soft-primary">
                  <i className="fa-solid fa-user-shield" />
                </div>
                <h4 className="why-title">Proven Security Expertise</h4>
                <p className="why-desc">
                  Years of experience in cloud and cybersecurity, delivering
                  measurable risk reduction.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="why-card">
                <div className="why-icon bg-soft-accent">
                  <i className="fa-solid fa-handshake-angle" />
                </div>
                <h4 className="why-title">Practical, Cost effective Advice</h4>
                <p className="why-desc">
                  Actionable recommendations that fit your budget and deliver
                  quick wins.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="why-card">
                <div className="why-icon bg-soft-dark">
                  <i className="fa-solid fa-rocket-launch" />
                </div>
                <h4 className="why-title">Fast, Clear Results</h4>
                <p className="why-desc">
                  We prioritize impact fast assessments, clear reports, and
                  prioritized remediation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Contact parentClass="get-in-touch-area tmp-section-gapTop tmp-section-gapBottom contact-overlap" />
        <Footer1 />
        <CommonComponents />
      </div>
    </>
  );
}
