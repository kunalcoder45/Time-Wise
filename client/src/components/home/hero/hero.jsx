import { useEffect } from "react";
import { gsap } from "gsap";
import Salon from "../assets/mensSalon.jpg";
import Rashan from "../assets/RashanStore.jpg";
import HospitalReception from "../assets/hostpital.jpg";
import Palour from "../assets/palour.jpg";

const Hero = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".middle-div",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    timeline.fromTo(
      ".left-div",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 }
    );

    timeline.fromTo(
      ".right-div",
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 1 }
    );
  }, []);

  return (
  <div className="grid grid-rows-1 grid-flow-col gap-1 mt-20 md:mt-6 h-screen">
      <div className="bg-white hidden md:block min-w-20 left-div opacity-0 mt-14">
        <div className="md:flex flex-col items-end justify-end h-[85vh] gap-8">
          <div className="flex flex-col items-end w-full">
            <img
              src={Salon}
              className="w-6/12 h-44 rounded-2xl object-cover max-w-full"
              alt="Mens Salon"
            />
            <p className="mt-2 text-center">Mens Salon</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <img
              src={Rashan}
              className="w-6/12 h-44 rounded-2xl object-cover max-w-full ml-10"
              alt="Grocery Store"
            />
            <p className="mt-2 text-center mb-8 ml-10">Grocery Store</p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white min-w-80 text-center md:flex flex-col items-center justify-center h-[85vh] middle-div opacity-0 md:mt-8">
        <div className="mb-8 mt-8">
          <p className="text-sm font-medium text-gray-500 mb-2 font-heading">
            One Seamless Platform
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-blue-900 leading-tight">
            Appointment <br />{" "}
            <span className="text-blue-900 font-RozhaOne">&</span> class
            booking, <br />
            <span className="bg-gradient-to-r from-pink-300 to-yellow-200 text-transparent bg-clip-text font-heading">
              perfected.
            </span>
          </h1>
        </div>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-full text-lg shadow-md hover:bg-blue-700 font-Inter">
          Start a free account
        </button>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-xl font-semibold text-gray-700">
            ₹0{" "}
            <span className="text-sm font-normal text-gray-500">
              subscription fee
            </span>
          </p>
          <p className="mt-4 text-gray-600 text-sm max-w-lg font-heading">
            Unlimited usage with no setup fees. Connect optional add-ons
            <sup>1</sup> to boost your business.
          </p>
        </div>
      </div>

      <div className="bg-white hidden md:block min-w-20 right-div opacity-0">
        <div className="md:flex flex-col items-center justify-end h-full gap-8">
          <div className="flex flex-col items-start w-full">
            <img
              src={HospitalReception}
              className="w-6/12 h-44 rounded-2xl object-cover max-w-full"
              alt="Hospital"
            />
            <p className="mt-2 text-center">Hospital</p>
          </div>
          <div className="flex flex-col items-end w-full">
            <img
              src={Palour}
              className="w-6/12 h-44 rounded-2xl object-cover max-w-full mr-10"
              alt="Palour"
            />
            <p className="mt-2 text-center mb-24 mr-10">Palour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
