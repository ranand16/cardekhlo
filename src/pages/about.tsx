import HeroPages from "@/components/HeroPages";
import PlanTrip from "@/components/PlanTrip";
import { Content } from "@/layout/Content";
import { MainOnlyContent } from "@/layout/MainOnlyContent";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utility/Constants";
import Image from "next/image";
import AboutMain from "../images/about/about-main.jpg";
import box1 from "../images/about/icon1.png";
import box2 from "../images/about/icon2.png";
import box3 from "../images/about/icon3.png";
import { BookNow } from "@/components/BookNow";
import Footer from "@/layout/Footer";

export default function About() {
  return (
    <MainOnlyContent
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Content>
        <HeroPages name="About" />
        <div className="max-w-md md:max-w-4xl lg:max-w-80rem px-10 mx-auto">
          <div className="about-main flex lg:flex-row flex-col justify-center items-center lg:items-start gap-20 my-32">
            <Image className="" src={AboutMain} alt="car-renting" />
            <div className="about-main__text flex flex-col md:items-start items-center">
              <h4 className="mb-3">About Company</h4>
              <p className=" text-5xl font-bold">
                You start the engine and your adventure begins
              </p>
              <p className="text-paragrey text-base mt-5 mb-10">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons w-full flex gap-4 justify-center lg:justify-start">
                <div className="flex flex-col">
                  <Image height={39} src={box1} alt="car-icon" />
                  <span className="flex items-center gap-2">
                    <h2>20</h2>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="flex flex-col">
                  <Image src={box2} alt="car-icon" />
                  <span className="flex items-center gap-2">
                    <h2>85</h2>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="flex flex-col">
                  <Image src={box3} alt="car-icon" className="last-fk" />
                  <span className="flex items-center gap-2">
                    <h2>75</h2>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
        <BookNow />
        <Footer />
      </Content>
    </MainOnlyContent>
  );
}
