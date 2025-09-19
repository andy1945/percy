import Facts from "@/components/common/Facts";
import Education from "@/components/common/Education2";
import Certifications from "@/components/common/Certifications";
import Footer1 from "@/components/footers/Footer1";
import Contact from "@/components/common/Contact";
//import Header1 from "@/components/headers/Header1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title: "About || Cybersecurity & IT Audit Leader  | GRC Expert",
  description: "Cybersecurity & IT Audit Leader  | GRC Expert",
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
                  <h1 className="title split-collab">About Me</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">About Me</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-intro-area tmp-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-me-intro-content text-center">
                  <h2 className="title">Securing Businesses. Enabling Compliance. Building Trust.</h2>
                  <p className="description">
                    Welcome! I’m a cybersecurity and IT audit professional with extensive experience in governance, risk, and compliance. I’ve helped organizations across industries — from healthcare to financial services — strengthen their security postures, meet rigorous compliance standards, and confidently navigate cloud transformations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Facts parentClass="tmp-section-gapTop tmp-section-gapBottom" />
        <Education />
        <Certifications />
        <Contact parentClass="tmp-section-gapBottom" />
        <Footer1 /> <CommonComponents />
      </div>
    </>
  );
}
