// @flow strict

import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-transparent">
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

        {/* Navigation */}
        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link className="block px-4 py-2" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                ABOUT
              </div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2" href="/#experience">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                EXPERIENCE
              </div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                SKILLS
              </div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                EDUCATION
              </div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                PROJECTS
              </div>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;