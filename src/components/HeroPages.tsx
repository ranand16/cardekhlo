import Link from "next/link";

type HeroPagesType = {
  name: string;
};

function HeroPages({ name }: HeroPagesType) {
  return (
    <>
      <section className="hero-pages bg-no-repeat bg-cover relative w-full">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{ backgroundColor: "hsla(0,0%,100%,.92)" }}
        ></div>
        <div className="mx-auto flex max-w-[80rem] h-full w-full justify-between items-center py-8 px-11">
          <div className="hero-pages__text z-10 flex w-full justify-center flex-col text-blackprimary">
            <h3 className="leading-10 ">{name}</h3>
            <p>
              <Link href="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
