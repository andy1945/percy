import React from "react";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="tmp-banner-one-area style-2 bg_image bg_image--9" id="home">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                <span className="sub-title wow fadeInUp">
                  Hello
                </span>
                <h1 className="title wow fadeInUp">
                  I’m Percy Jacob
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "An IT AUDIT LEADER.",
                          "A Cloud Security Strategist.",
                          "A GRC EXPERT &",
                          "Cybersecurity Specialist.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc wow fadeInUp">
                  Securing Businesses, Enabling Compliance, and Building Trust
                  Through Expert-Led Cyber Governance
                </p>
                <div className="button-area-banner-one wow fadeInUp">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round"
                    href={`/what-i-do`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View Portfolio</span>
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
      </div>
    </div>
  );
}
