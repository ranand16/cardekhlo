import { ModelBox } from "./../components/ModelBox";
import HeroPages from "@/components/HeroPages";
import { Content } from "@/layout/Content";
import { MainOnlyContent } from "@/layout/MainOnlyContent";
import { Meta } from "@/layout/Meta";
import { AppConfig, CAR_MODELS } from "@/utility/Constants";
import { BookNow } from "@/components/BookNow";
import Footer from "@/layout/Footer";
import Link from "next/link";
import CarImg1 from "../images/cars-big/audi-box.png";
// import CarImg2 from "../images/cars-big/golf6-box.png";
// import CarImg3 from "../images/cars-big/toyota-box.png";
// import CarImg4 from "../images/cars-big/bmw-box.png";
// import CarImg5 from "../images/cars-big/benz-box.png";
// import CarImg6 from "../images/cars-big/passat-box.png";
import Image from "next/image";

export default function Models() {
  return (
    <MainOnlyContent
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Content>
        <HeroPages name="Vehicle Models" />
        <div className="max-w-md md:max-w-4xl lg:max-w-80rem px-10 mx-auto">
          <div className="models-div grid gap-7 items-center gap mx-auto w-fit xl:w-68.75rem py-24 text-center">
            {CAR_MODELS.map((model) => {
              return (
                <ModelBox
                  brand={model["brand"]}
                  fuelType={model["fuelType"]}
                  link={model["link"]}
                  name={model["name"]}
                  rate={model["rate"]}
                  rating={model["rating"]}
                  transmissionType={model["transmissionType"]}
                  image={model["image"]}
                />
              );
            })}
          </div>
        </div>
        <BookNow />
        <Footer />
      </Content>
    </MainOnlyContent>
  );
}
