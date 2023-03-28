import Link from "next/link";

type HeroPagesType = {
  name: string;
};

function HeroPages({ name }: HeroPagesType) {
  return (
    <>
      <section className="hero-pages">
        <div className="position-absolute top-0 right-0 w-full h-full" style={{ backgroundColor: "hsla(0,0%,100%,.92)" }}></div>
        <div className="px-8">
          <div className="hero-pages__text">
            <h3>{name}</h3>
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
