"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { openMobilemenu2 } from "@/utlis/toggleMobilemenu";
import Nav1 from "./Nav1";
export default function Header2({
  darkLogo = "/assets/images/logo/white-logo-reeni.png",
  lightLogo = "/assets/images/logo/logo-white.png",
}) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      {/* header mid area start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-dark"
                    alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                    src={darkLogo}
                    width={121}
                    height={41}
                  />
                  <Image
                    className="logo-white"
                    alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                    src={lightLogo}
                    width={121}
                    height={40}
                  />
                </Link>
              </div>
              <div className="tmp-mainmenu-nav d-none d-xl-block">
                <nav className="navbar-example2">
                  <Nav1 />
                </nav>
              </div>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/percy-r-a7b7b3192/"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a target="_blank" href="https://x.com/Percyrwandarugali">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </div>
                </div>
                <div className="tmp-side-collups-area d-block d-xl-none">
                  <button
                    className="hamberger-menu humberger_menu_active"
                    onClick={openMobilemenu2}
                  >
                    <i
                      id="menuBtn"
                      className="fa-light fa-bars humberger-menu"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header mid area end */}
    </header>
  );
}
