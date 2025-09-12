import { certifications } from "@/data/certifications";
import React from "react";

export default function Certifications() {
  return (
    <section className="certifications-area tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">My Certifications</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            A Commitment to Excellence
          </h2>
        </div>
        <div className="row g-5">
          {certifications.map((cert, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
              <div
                className={`cert-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${index}`}>
                <div className="card-head">
                  <div className="icon">
                    <i className={cert.icon}></i>
                  </div>
                  <h3 className="card-title">{cert.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
