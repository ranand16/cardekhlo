function Footer() {
  return (
    <>
      <footer className=" py-24">
        <div className="max-w-md md:max-w-4xl lg:max-w-80rem px-10 mx-auto">
          <div className="grid gap-32 align-left text-verydark justify-center grid-cols-1 md:grid-cols-4">
            <ul>
              <li className="text-2xl mb-4">
                <span className="font-bold">CAR</span> Rental
              </li>
              <li className=" text-paragrey text-base mb-8">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li className="font-medium mb-2 text-base">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="tel:123456789"
                >
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li className="font-medium mb-2 text-base">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li>
                <a
                  className="transition-all hover:text-websiteprimary"
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="font-bold text-xl uppercase mb-3">Company</li>
              <li className="text-base mb-3">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="#home"
                >
                  New York
                </a>
              </li>
              <li className="text-base mb-3">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="#home"
                >
                  Careers
                </a>
              </li>
              <li className="text-base mb-3">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="#home"
                >
                  Mobile
                </a>
              </li>
              <li className="text-base mb-3">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="#home"
                >
                  Blog
                </a>
              </li>
              <li className="text-base mb-3">
                <a
                  className="transition-all hover:text-websiteprimary"
                  href="#home"
                >
                  How we work
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="font-bold text-xl uppercase mb-3">
                Working Hours
              </li>
              <li className="font-medium mb-2 text-base">
                Mon - Fri: 9:00AM - 9:00PM
              </li>
              <li className="font-medium mb-2 text-base">
                Sat: 9:00AM - 19:00PM
              </li>
              <li className="font-medium mb-2 text-base">Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li className="font-bold text-xl uppercase mb-3">Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li className="text-base mb-3">
                <input
                  className=" bg-inputbg border-2 text-base mt-3 outline-none py-3 px-14 w-full"
                  type="email"
                  placeholder="Enter Email Address"
                ></input>
              </li>
              <li>
                <button className="submit-email w-full bg-websiteprimary text-white py-3 px-6 rounded-sm shadow-md font-bold">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
