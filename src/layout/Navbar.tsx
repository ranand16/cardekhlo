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
          className={`flex flex-col w-full h-screen fixed top-0 right-full justify-center z-[99999] items-center transition duration-150 ease-in-out  ${
            nav ? "open-nav" : ""
          }`}
        >
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            {NAV_LINKS.map((link) => (
              <>
                <li>
                  <Link
                    className="flex"
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

        <div className="navbar hidden lg:flex max-w-[133rem] w-full justify-between items-center absolute top-0 left-0 right-0 py-8 px-11">
          <div className="w-56">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" className="w-full h-full" />
            </Link>
          </div>
          <ul className="navbar__links flex gap-4">
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
          <div className="navbar__buttons flex gap-4 items-center">
            <Link
              className="navbar__buttons__sign-in text-blackprimary transition-all duration-300 hover:text-websiteprimary"
              href="/"
            >
              Sign In
            </Link>
            <Link
              className="navbar__buttons__register bg-websiteprimary text-white py-3 px-6 border-radius-3"
              href="/"
            >
              Register
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div
          className="mobile-hamb flex lg:hidden transition-all cursor-pointer"
          onClick={openNav}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
