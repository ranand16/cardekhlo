export function BookNow() {
  return (
    <div className="book-banner flex h-48 mt-20 w-full relative">
      <div className="book-banner__overlay bg-nightrider opacity-90 absolute top-0 right-0 w-full h-full"></div>
      <div className="container max-w-md md:max-w-4xl lg:max-w-80rem mx-auto px-4">
        <div className="text-content h-full flex items-center gap-12 relative z-10 justify-center">
          <h2 className="text-white">Book a car by getting in touch with us</h2>
          <span className=" align-center flex gap-3 whitespace-nowrap text-2xl">
            <i className="fa-solid fa-phone text-websiteprimary"></i>
            <h3 className="text-websiteprimary">(123) 456-7869</h3>
          </span>
        </div>
      </div>
    </div>
  );
}
