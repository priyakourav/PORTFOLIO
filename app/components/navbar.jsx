// @flow strict

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-transparent">
      <div className="flex items-center justify-between py-5">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PK Logo"
            width={60}
            height={60}
            priority
            className="hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          {[
            ["ABOUT", "about"],
            ["EXPERIENCE", "experience"],
            ["SKILLS", "skills"],
            ["CERTIFICATIONS", "certifications"],
            ["EDUCATION", "education"],
            ["PROJECTS", "projects"],
            ["CONTACT", "contact"],
          ].map(([label, id]) => (
            <li key={id}>
              <Link className="block px-4 py-2" href={`/#${id}`}>
                <span className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-[#0d1224]/95 backdrop-blur-lg border border-[#25213b] rounded-lg shadow-xl">
          <ul className="flex flex-col py-3">
            {[
              ["ABOUT", "about"],
              ["EXPERIENCE", "experience"],
              ["SKILLS", "skills"],
              ["CERTIFICATIONS", "certifications"],
              ["EDUCATION", "education"],
              ["PROJECTS", "projects"],
              ["CONTACT", "contact"],
            ].map(([label, id]) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-white hover:text-pink-500 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;