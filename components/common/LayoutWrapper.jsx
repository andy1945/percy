"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import SplitText from "@/utlis/splittext";
import gsap, { Back } from "gsap";
import { closeMobilemenu, closeMobilemenu2 } from "@/utlis/toggleMobilemenu";
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  return <>{children}</>;
}