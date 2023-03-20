import HeroPages from "@/components/HeroPages";
import Image from "next/image";
import AboutMain from "../images/about/about-main.jpg";

export default function About() {
  return (
    <section className="">
      <HeroPages name="About" />
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-20 max-w-7xl my-40">
          <Image className="" src={AboutMain} alt="car-renting" />
        </div>
      </div>
    </section>
  );
}
