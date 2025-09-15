import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";
export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          
          <h2 className="title split-collab wow fadeInUp">
            Education &amp; Experience
          </h2>
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
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={`education-experience-card tmponhover wow fadeInUp`}
              >
                <h4 className="edu-sub-title fw-bold">{item.role}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
