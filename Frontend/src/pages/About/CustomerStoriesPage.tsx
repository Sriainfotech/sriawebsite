import React from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';
// import HeroSectionWithLinks from '../../components/HeroSectionWIthLInks';
// import Navigation from '../../components/Navigation';

const customerStories = [
  {
    id: 1,
    image: "/partners/ivc-logo.png",
    title: "IVC Consulting Strengthens Global SAP Delivery with Strategic Partnership",
    readMoreLink: "/partners/ivc-solutions",
  },
  {
    id: 2,
    image: "/customerStories/patil.jpg",
    title: "Patil Drives Operational Excellence with End-to-End SAP, AMS & OCR Automation",
    readMoreLink: "/patil",
  },
  {
    id: 3,
    image: "/customerStories/7hills.jpg",
    title: "7Hills Restaurant Transforms Guest Experience with Custom Digital Platform",
    readMoreLink: "/hills",
  },
  {
    id: 4,
    image: "/customerStories/pharma.jpg",
    title: "LVK Pharma Goes Digital with Odoo CRM, Eliminates Manual Processes",
    readMoreLink: "/Lvk",
  },
];

const CustomerStoriesPage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <Navigation enableScrollEffect={true} /> */}
      {/* <HeroSectionWithLinks
        imageUrl="/customerstory.jpg"
        title="Success Stories"
        links={[
          // { label: "About us", href: "/aboutus" },
          // { label: "Meet the team", href: "/about/leadership" },
        ]}
      /> */}
      <div className="relative w-full h-[400px] bg-gray-900 text-white flex flex-col items-center justify-center">
        <img src="/customerstory.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 text-center relative bg-white z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Success Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how our innovative solutions have empowered businesses to achieve operational excellence and growth.
        </p>
      </section>

      {/* Stories Grid */}
      <section className="relative w-full bg-white z-10 mx-auto">
        <div className='max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {customerStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h2>
                <Link
                  to={story.readMoreLink}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center relative z-10 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inspired by these success stories?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Let’s discuss how we can help your business achieve similar results.
        </p>
        <Link
          to="/contactus"
          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 rounded font-medium transition-colors text-sm"
        >
          Get in Touch
        </Link>
      </section>

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
};

export default CustomerStoriesPage;
