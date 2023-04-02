import HeroPages from "@/components/HeroPages";
import { Content } from "@/layout/Content";
import { MainOnlyContent } from "@/layout/MainOnlyContent";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utility/Constants";
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
        <HeroPages name="Testimonials" />
        <div className="max-w-md md:max-w-4xl lg:max-w-80rem px-10 mx-auto"></div>
        <BookNow />
        <Footer />
      </Content>
    </MainOnlyContent>
  );
}
