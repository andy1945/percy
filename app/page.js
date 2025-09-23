import Services3 from "@/components/common/Services3";
import Header2 from "@/components/headers/Header2";
import Education from "@/components/common/Education2";
import About from "@/components/homes/home-9/About";
import Hero from "@/components/homes/home-9/Hero";
import React from "react";
import Pricing from "@/components/common/Pricing";
import Contact from "@/components/common/Contact";
import Footer1 from "@/components/footers/Footer1";
import CommonComponents from "@/components/common/CommonComponents";
import Certifications from "@/components/common/Certifications";
import WhatIDo from "@/components/common/WhatIDo";

export const metadata = {
  title: "Percy Jacob || An IT AUDIT LEADER | A Cloud Security Strategist",
  description:
    "An IT AUDIT LEADER | A Cloud Security Strategist | A GRC EXPERT & Cybersecurity Specialist",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header2 />
        <Hero />
        <About />
        <WhatIDo />

        <Contact parentClass="get-in-touch-area tmp-section-gapTop tmp-section-gapBottom" />
        <Footer1 />
        <CommonComponents />
      </div>
    </>
  );
}
