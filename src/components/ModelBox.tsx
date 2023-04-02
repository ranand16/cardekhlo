import { CAR_MODELS } from "@/utility/Constants";
import Image from "next/image";
import Link from "next/link";

export function ModelBox({
  brand,
  fuelType,
  image,
  link,
  name,
  rate,
  rating,
  transmissionType,
}: typeof CAR_MODELS[0]) {
  return (
    <div className="models-div__box border border-solid boder-lightgray flex flex-col w-80 rounded-md">
      <div className="models-div__box__img rounded-md">
        <img src={image} alt="car_img" className="h-16rem lg:" />
        <div className="models-div__box__descr flex flex-col py-5 px-8">
          <div className="models-div__box__descr__name-price flex items-center justify-between">
            <div className="models-div__box__descr__name-price__name">
              <p className="text-xl font-bold">{name}</p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4 className="text-xl font-bold">${rate}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details model-desc-details">
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {brand}
            </span>
            <span
              style={{
                textAlign: "right",
              }}
            >
              {rating}/5 &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {transmissionType}
            </span>
            <span
              style={{
                textAlign: "right",
              }}
            >
              {fuelType} &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn bg-websiteprimary border-2 border-websiteprimary cursor-pointer py-4 px-8 transition-all text-white text-center text-xl font-bold">
            <Link onClick={() => window.scrollTo(0, 0)} href={link}>
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
