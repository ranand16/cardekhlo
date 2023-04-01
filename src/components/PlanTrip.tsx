import Image from "next/image";
import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container mx-auto">
          <div className="plan-container">
            <div className="plan-container__title text-center">
              <h3>Plan your trip now</h3>
              <h2 className="mb-6 mt-3">Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes mt-16 grid grid-cols-1 lg:grid-cols-3">
              <div className="text-center py-3 px-14">
                <Image className="mx-auto" src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="text-center py-3 px-14">
                <Image className="mx-auto" src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="text-center py-3 px-14">
                <Image className="mx-auto" src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
