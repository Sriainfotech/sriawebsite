import React from "react";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import HeroSectionWithLinks from "@/components/HeroSectionWIthLInks";
// import Requesademobtn from "@/components/Requesademobtn";
// import PartnersSection from "@/components/PartnersSection";
import { Link } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";


function Partners() {
    return (
        <div className="w-full min-h-screen">
            {/* <Navigation enableScrollEffect={true} /> */}

            <PageHeader
                title="Our Strategic Partners"
                breadcrumbs={[
                    { name: "About us", path: "/aboutus" },
                    { name: "Partners", path: "/about/partners" },
                ]}
                backgroundImage="/partners/sap-partner.png"
            />


            {/* PARTNERSHIP OVERVIEW SECTION */}
            <div className="w-full bg-white flex justify-center p-6 lg:p-10 relative z-10">
                <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-8 bg-gray-100 p-6 lg:p-10 rounded-lg">
                    {/* LEFT TEXT */}
                    <div className="lg:w-[45%]">
                        <h3 className="text-sm text-gray-400 mb-2">Partnership Overview</h3>
                        <h4 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-black mb-6 leading-tight">
                            Collaborating for Innovation & Growth
                        </h4>

                        <p className="text-gray-500 text-base leading-relaxed mb-4">
                            At Sria Infotech, strategic collaboration empowers our mission of
                            building smarter, more sustainable, future-ready solutions. Each
                            partnership strengthens our capabilities, expands our global
                            presence, and accelerates innovation across industries.
                        </p>

                        <p className="text-gray-500 text-base leading-relaxed">
                            Our joint venture ecosystem is built on trust, shared vision, and
                            a commitment to delivering transformative digital solutions for
                            businesses worldwide.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="lg:w-[55%]">
                        <div className="w-full h-64 sm:h-80 md:h-[32rem] overflow-hidden rounded-md shadow-md bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                            <img
                                src="/partners/partner-overview.png"
                                alt="Partnership Overview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* PARTNERS SECTION - Data-driven, scalable */}
            {/* <PartnersSection /> */}
            <div className="py-16 bg-white text-center">
                <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
                <p className="text-gray-600">Partner logos and details would go here.</p>
            </div>

            {/* CTA SECTION */}
            <div className="w-full bg-black h-[100px] relative z-10 text-white flex items-center p-4 justify-center">
                <div className="w-[1400px] flex flex-row justify-between items-center">
                    <h1 className="text-[21px]">Learn about Sria Infotech and what we do</h1>

                    <Link to="/contactus">
                        {/* <Requesademobtn text="Get in Touch" /> */}
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </div>

            {/* FOOTER */}
            <div className="w-full relative z-10 bg-black">
                <div className="max-w-[1400px] w-full mx-auto">
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
}

export default Partners;
