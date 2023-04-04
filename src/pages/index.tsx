import { AppConfig } from "@/utility/Constants";
import { Main } from "@/layout/Main";
import { Meta } from "@/layout/Meta";
import { Content } from "@/layout/Content";
import Image from "next/image";
import indexherobg from "../images/hero/hero-bg.png";
import indexherocar from "../images/hero/main-car.png";
import Link from "next/link";

export default function Home() {
  const bookBtn = () => {
    // window.document
    //   .querySelector("#booking-section")
    //   .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Content>
        <section className="hero-index max-w-md md:max-w-4xl lg:max-w-80rem px-10 mx-auto">
          <Image
            src={indexherobg}
            alt="hero bg"
            className="absolute right-0 top-0 z-10"
            style={{ width: "680px" }}
          />
          <div className="flex items-center relative w-full h-screen">
            <div className="flex flex-col max-w-3xl mt-12 z-10">
              <h4 className="text-2xl font-bold">Plan your trip now</h4>
              <h1 className=" text-6xl font-extrabold mt-2 mb-6">
                Save <span className=" text-websiteprimary">big</span> with our
                car rental
              </h1>
              <p className="text-paragrey mb-10 text-base">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns flex gap-5 text-base">
                <Link
                  onClick={bookBtn}
                  className="bg-websiteprimary text-white py-3 px-6 shadow-md font-bold border rounded-md"
                  href="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link
                  className="hero-content__text__btns__learn-more bg-black text-white py-3 px-6 shadow-md font-bold hover:text-verydark hover:bg-white transition-all duration-300 border rounded-md"
                  href="/"
                >
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <Image src={indexherocar} alt={"car"} className=" z-10 w-8/12" />
          </div>
        </section>
      </Content>
    </Main>
  );
}
