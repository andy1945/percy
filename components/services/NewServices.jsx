import React from "react";
import Image from "next/image";
import { newServicesData } from "@/data/newServices";

export default function NewServices() {
  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="row g-5">
          {newServicesData.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="service-card-v1 vc-primary-2nd h-100">
                <div className="service-card-icon">
                  <Image src={item.image} alt={item.title} width={100} height={100} />
                </div>
                <h3 className="service-title">{item.title}</h3>
                <p className="service-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
