import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const timeline = gsap.timeline();
                    timeline.fromTo(
                        sectionRef.current,
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" }
                    );
                    observer.unobserve(entry.target); 
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Tailwind CSS classes
    const containerClasses = "contact-section flex flex-col items-center justify-center bg-white h-screen";
    const titleClasses = "text-xl md:text-1xl font-thin text-center mb-2 font-heading";
    const subtitleClasses = "text-2xl md:text-5xl font-semibold text-center mb-6 font-heading";
    const buttonClasses = "bg-blue-500 text-white py-3 px-6 rounded-full text-sm mb-6 font-Inter hover:bg-blue-600 transition duration-300";
    const textClasses = "text-lg mt-2 md:text-base font-heading";
    const smallTextClasses = "text-xs md:text-sm font-light font-Inter";
    const helpButtonClasses = "border font-Inter border-blue-500 text-sm text-blue-500 py-2 px-4 rounded-full mt-2 hover:bg-blue-500 hover:text-white transition duration-300";

    return (
        <div ref={sectionRef} className={containerClasses}>
            <h1 className={titleClasses}>
                We're here for you
            </h1>
            <h2 className={subtitleClasses}>
                Absolutely free to use, <br /><span className='text-2xl md:text-4xl font-semibold text-center mb-6 font-heading'>and scalable as you grow.</span>
            </h2>
            <button className={buttonClasses}> 
                Start a free account
            </button>
            <div className="flex gap-10 md:gap-20">
                <div className="text-center mb-2"> <hr />
                    <p className={textClasses}>Still not sure?</p>
                    <p className={smallTextClasses}>Watch tutorials and read <br /><span className='font-Inter font-light'>detailed articles</span></p>
                    <button className={helpButtonClasses}>
                        Book a demo
                    </button>
                </div>
                <div className="flex justify-center space-x-4 md:space-x-8 text-center">
                    <div> <hr />
                        <p className="mt-2 text-base font-heading">Get answers</p>
                        <p className={smallTextClasses}>Watch tutorials and read <br /><span className='font-Inter font-light'>detailed articles</span></p>
                        <button className={helpButtonClasses}>
                            Help Center
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
