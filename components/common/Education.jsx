import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop">
      <div className="container">
        <div className="experiences-wrapper v2">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="experiences-wrap-right-content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", maxWidth: 630 }}>
                  <Image
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="expert-img"
                    width={630}
                    height={479}
                    src="/assets/images/experiences/percyimage.png"
                    style={{
                      objectFit: "cover",
                      objectPosition: "top center",
                      width: "100%",
                      height: "479px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "30px" }} className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Free Consultation Offer{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h2 className="ex-name">What to Expect</h2>

                  <p className="ex-para">
                    <ul>
                      <li>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Expert Insights:
                        </span>{" "}
                        Our experienced consultants will share their knowledge
                        on current threats and best practices tailored to your
                        specific needs.
                      </li>
                      <li>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          Customized Recommendations:
                        </span>{" "}
                        Receive actionable advice that aligns with your business
                        objectives and operational environment
                      </li>
                      <li>
                        {" "}
                        <span style={{ fontWeight: "bold" }}>
                          No Commitment Required
                        </span>{" "}
                        This consultation is completely free, allowing you to
                        evaluate our services without any obligation.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
