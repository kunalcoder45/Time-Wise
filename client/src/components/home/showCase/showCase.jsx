import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/save.png";
import Banner3 from "../assets/lock.png";
import Banner4 from "../assets/pay.png";
import Banner5 from "../assets/sucure.png";
import Banner6 from "../assets/Grocery.png";
import Banner7 from "../assets/message.svg";

const Showcase = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const leftSection = leftSectionRef.current;
    const rightSection = rightSectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.set(leftSection, { x: '-100%' });
          gsap.set(rightSection, { x: '100%' });

          gsap.to(leftSection, {
            x: 0,
            duration: 1,
            ease: 'power3.out'
          });

          gsap.to(rightSection, {
            x: 0,
            duration: 1,
            ease: 'power3.out'
          });

          // Stop observing after the animation has run
          observer.unobserve(entry.target);
        }
      });
    });

    // Start observing the sections
    if (leftSection) observer.observe(leftSection);
    if (rightSection) observer.observe(rightSection);

    // Cleanup observer on component unmount
    return () => {
      if (leftSection) observer.unobserve(leftSection);
      if (rightSection) observer.unobserve(rightSection);
    };
  }, []);

  return (
    <main className="m-6 md:m-12 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
      {/* Left Section */}
      <div ref={leftSectionRef} className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Top 1 */}
        <div ref={leftSectionRef} className="bg-customGreen text-customGreenText rounded-lg shadow-lg p-4 flex flex-col items-center justify-center font-bold">
          <p className="text-center mb-4 font-heading">Save Time</p>
          <p className="text-center mb-2 font-Inter font-light">Book Your Appointment Online</p>
          <img src={Banner2} alt="" className="w-3/4 h-auto object-cover" />
        </div>
        {/* Left Top 2 */}
        <div ref={leftSectionRef} className="bg-customYellow rounded-lg shadow-lg p-4 flex flex-col items-center justify-center font-bold text-customBrown">
          <h2 className="mb-2 px-7 py-2 border-customBrown border-2 rounded-full font-heading">
            No subscription fees
          </h2>
          <p className="text-center font-light font-Inter">Only pay for optional add-ons</p>
          <div className="flex justify-center mt-4 gap-4">
            <div className="flex flex-col items-center w-1/2">
              <img
                src={Banner6}
                alt=""
                className="w-2/6 h-auto object-cover mb-2"
              />
              <span className="text-center font-Inter text-sm font-light">Half advance needed where relevant.</span>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2">
              <img
                src={Banner7}
                alt=""
                className="w-2/6 h-auto object-cover mb-2 mt-4"
              />
              <span className="text-center font-Inter font-light text-sm">You send the message regarding advance.</span>
            </div>
          </div>
        </div>
        {/* Left Bottom */}
        <div className="bg-customPurple rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-customPurpleText font-bold md:col-span-2">
          <p className="text-center mb-4 font-heading">
            We handle the data migration and setup
          </p>
          <img src={Banner1} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Right Section */}
      <div ref={rightSectionRef} className="bg-customBlue rounded-lg shadow-lg p-4 h-full flex flex-col text-customDarkBlue font-bold lg:row-span-2 lg:col-span-1">
        <div className="flex flex-col items-center justify-between flex-grow gap-10 my-5">
          <div className="flex flex-col items-center">
            <img
              src={Banner3}
              alt=""
              className="max-w-[96px] max-h-[96px] w-auto h-auto object-cover"
            />
            <span className="text-center font-heading">Encrypted Your Data</span>
            <span className="text-center text-customLightBlue font-Inter font-light">
              Your privacy is our top priority
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Banner4}
              alt=""
              className="max-w-[96px] max-h-[96px] w-auto h-auto object-cover"
            />
            <span className="text-center font-heading">Payments</span>
            <span className="text-center text-customLightBlue font-Inter font-light">
              Payments powered by Razorpay
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Banner5}
              alt=""
              className="max-w-[120px] max-h-[120px] w-auto h-auto object-cover"
            />
            <span className="text-center font-heading">Security is top priority</span>
            <span className="text-center text-customLightBlue font-Inter font-light">
              100% secure platform
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Showcase;  