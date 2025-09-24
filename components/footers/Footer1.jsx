"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollTop from "../common/ScrollTop";

const footerMenuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-i-do", label: "What I do" },
  { href: "/contact", label: "Contact" },
];

export default function Footer1({
  darkLogo = "/assets/images/logo/white-logo-reeni.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
  return (
    <>
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-12 col-md-12 text-center">
                <div className="single-footer-wrapper quick-link-wrap">
                  <ul className="ft-link tmp-link-animation d-flex justify-content-center flex-wrap gap-3">
                    {footerMenuItems.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
