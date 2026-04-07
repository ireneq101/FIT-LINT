import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <section className="flex items-center justify-center ps-0 py-10">

      <div className="border border-green-500 rounded-2xl w-full p-8 pt-15 bg-[#0a1128] text-white">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-10 mb-10">

          {/* Fit-Lint Links */}
          <div className="sm:w-40">
            <h2 className="text-2xl  md:text-3xl font-bold mb-4">Fit-Lint</h2>
            <ul className="space-y-3 text-gray-300 text-lg md:text-xl">
              <li className="hover:text-green-400 transition-colors cursor-pointer">About</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Routine</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Activities</li>
              <li className="hover:text-green-400 transition-colors cursor-pointer">Team</li>
            </ul>
          </div>

          {/* Location */}
          <div className="sm:w-66">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Location</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              No. 101 Gbajmdjh Texas, <br />
              United State Of American.
            </p>
          </div>

          {/* Stay Fit */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Fit, Stay Healthy</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              Join Fit-Lint, Our Comprehensive Resources, Expect Trainers And Supportive Community Are Here To Support You.
            </p>

            {/* Email Input */}
            <div className="flex items-center bg-[#111d3e] rounded-full overflow-hidden px-6 py-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent flex-1 text-sm text-gray-300 placeholder-gray-500 outline-none py-2"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold rounded-full px-4 py-2 transition-colors cursor-pointer whitespace-nowrap">
                SEND EMAIL
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Social Icons */}
          <div className="flex gap-4 text-green-500 text-xl">
            {/* Facebook */}
            <span className="cursor-pointer hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </span>
            {/* Instagram */}
            <span className="cursor-pointer hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            {/* X / Twitter */}
            <span className="cursor-pointer hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            {/* LinkedIn */}
            <span className="cursor-pointer hover:text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
          </div>

          {/* Logo */}
          <div className="text-center">
            <p className="text-green-500 font-bold text-lg tracking-widest">FIT-LINT</p>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">All Right Reserve 2025</p>

        </div>

      </div>

    </section>
  );
}

export default Footer;