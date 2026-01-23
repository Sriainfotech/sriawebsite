// import GlobalOffices from "@/components/aboutus/GlobalOffices";
// import Footer from "@/components/Footer";
// import HeroSectionWithLinks from "@/components/HeroSectionWIthLInks";
// import Navigation from "@/components/Navigation";
import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";


function Location() {
  return (
    <div className="w-full min-h-screen">
      {/* <Navigation enableScrollEffect={true} /> */}
      <PageHeader
        title="Global presence"
        breadcrumbs={[
          { name: "About us", path: "/aboutus" },
          { name: "Location", path: "/about/location" },
        ]}
        backgroundImage="/location.jpg"
      />


      <div className="w-full relative bg-black z-10">
        <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
          {/* <GlobalOffices /> */}
          <div className="py-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
            <p>Global office locations map/list would go here.</p>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8 w-full bg-white relative z-10 ">

      </div>
      <div className="w-full  relative z-10 bg-black">
        {" "}
        {/* Full width container */}
        <div className="max-w-[1400px] w-full mx-auto">
          {" "}
          {/* Centered max width container */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default Location;
