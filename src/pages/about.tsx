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

export default function About() {
  return (
    <MainOnlyContent
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Content>
        <HeroPages name="About" />
        <div className="container mx-auto px-4">
          <div className="about-main flex items-center gap-20 max-w-7xl my-40">
            <Image className="" src={AboutMain} alt="car-renting" />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <Image src={box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <Image src={box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <Image src={box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </Content>
    </MainOnlyContent>
  );
}
