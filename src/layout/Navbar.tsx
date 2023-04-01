import Logo from "../images/logo/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/utility/Constants";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div
          className={`mobile-nav-options flex flex-col w-full h-screen fixed top-0 right-full justify-center z-99999 bg-white items-center transition-all duration-500 ease-in-out  ${
            nav ? "open-mobile-nav-options" : ""
          }`}
        >
          <div
            onClick={openNav}
            className="absolute right-11 top-8 cursor-pointer"
          >
            <i className="fa-solid fa-xmark font-bold not-italic text-blackprimary"></i>
          </div>
          <ul className="mobile-navbar__links flex flex-col gap-12 text-center text-2xl">
            {NAV_LINKS.map((link) => (
              <>
                <li>
                  <Link
                    className="font-bold text-blackprimary transition-all duration-300 hover:text-websiteprimary"
                    onClick={openNav}
                    key={link["id"]}
                    href={link["redirect"]}
                  >
                    {link["text"]}
                  </Link>
                </li>{" "}
              </>
            ))}
          </ul>
        </div>

        <div className="navbar max-w-[80rem] flex w-full justify-between items-center absolute top-0 left-0 right-0 py-8 px-11 z-50 mx-auto">
          <div className="w-36 ">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" className="w-full h-full" />
            </Link>
          </div>
          <ul className="navbar__links gap-4 hidden lg:flex">
            {NAV_LINKS.map((link) => (
              <>
                <li>
                  <Link
                    className="font-bold text-blackprimary transition-all duration-300 hover:text-websiteprimary"
                    key={link["id"]}
                    href={link["redirect"]}
                  >
                    {link["text"]}
                  </Link>
                </li>{" "}
              </>
            ))}
          </ul>
          <div className="navbar__buttons hidden lg:flex gap-4 items-center">
            <Link
              className="navbar__buttons__sign-in text-blackprimary transition-all duration-300 hover:text-websiteprimary"
              href="/"
            >
              Sign In
            </Link>
            <Link
              className="navbar__buttons__register bg-websiteprimary text-white py-3 px-6 rounded-sm shadow-md font-bold"
              href="/"
            >
              Register
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div
          className="mobile-hamb absolute flex lg:hidden transition-all cursor-pointer z-50 right-11 top-8"
          onClick={openNav}
        >
          <i className="fa-solid fa-bars not-italic font-bold text-2xl"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
