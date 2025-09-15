import Facts from "@/components/common/Facts";
import Education from "@/components/common/Education2";
import Certifications from "@/components/common/Certifications";
import Footer1 from "@/components/footers/Footer1";
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
        <Facts parentClass="tmp-section-gapTop tmp-section-gapBottom" />
        <Education />
        <Certifications />
        <Footer1 /> <CommonComponents />
      </div>
    </>
  );
}
