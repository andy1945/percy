import React from "react";
import Image from "next/image";
import { counters } from "@/data/facts";
import OdometerComponent from "./OdometerComponent";
import { aboutCards } from "@/data/aboutCards";
export default function About2() {
  return (
    <div id="about" className="tmp-about-area">
      <div className="about-us-right-content-wrap">
        <div className="section-head text-align-left mb--50">
          <h2 className="custom-title mb--20 tmp-scroll-trigger tmp-fade-in animation-order-1">
            About Me
            <span>
              <Image
                alt="custom-line"
                src="/assets/images/custom-line/custom-line.png"
                width={81}
                height={6}
              />
            </span>
          </h2>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Boost Business Strategic <br />
            Solutions with Us
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            Welcome! I’m a cybersecurity and IT audit professional with
            extensive experience in governance, risk, and compliance. I’ve
            helped organizations across industries — from healthcare to
            financial services — strengthen their security postures, meet
            rigorous compliance standards, and confidently navigate cloud
            transformations. If you're looking for trusted expertise in SOC 2,
            ISO 27001, HIPAA, HITRUST, or NIST, you’re in the right place.
          </p>
        </div>
        <div className="about-us-section-card row g-5">
          <h3>What I Do?</h3>
          {aboutCards.map((card, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
              <div
                className={`about-us-card tmp-scroll-trigger tmponhover tmp-fade-in ${card.animationClass}`}
              >
                <div className="card-head">
                  <div className="logo-img">
                    <i className={card.iconClass} />
                  </div>
                  <h3 className="card-title fw-bold">{card.title}</h3>
                </div>
                <p className="card-para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt--60">
          <div className="row g-5">
            {counters.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6 col-12">
                <div
                  className={`counter-card tmp-scroll-trigger tmp-fade-in tmponhover animation-order-${item.order}`}
                >
                  <h3 className="counter counter-title">
                    <OdometerComponent max={item.count} /> {item.suffix}
                  </h3>
                  <p className="counter-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
