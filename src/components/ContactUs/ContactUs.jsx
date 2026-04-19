import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Button from "../Button/Button";
import Heading from "../Heading/Heading"

const ContactUs = () => {
  return (
    <section className="min-h-screen bg-zinc-100 py-30 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-zinc-800">
           <Heading highlight = 'Contact' heading='Us'/>
          </h2>
          <p className="text-zinc-500 mt-3">
            We’d love to hear from you. Get in touch anytime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

            <h3 className="text-2xl font-semibold text-zinc-800">
              Get in Touch
            </h3>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500" />
              <p className="text-zinc-600">+92 300 1234567</p>
            </div>

            <div className="flex items-center gap-4">
              <IoMail className="text-orange-500" />
              <p className="text-zinc-600">support@skardubites.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500" />
              <p className="text-zinc-600">Skardu, Gilgit-Baltistan</p>
            </div>

            {/* Map */}
            <div className="h-40 rounded-xl overflow-hidden">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=skardu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
              ></iframe>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              ></textarea>

              <Button content='Send Message'/>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
