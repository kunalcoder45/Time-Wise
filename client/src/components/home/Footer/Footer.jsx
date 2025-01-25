import Logo from "../../../../public/Logo/Logo.webp";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0A0B14] text-white py-8 px-8 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">

                    {/* Logo and Platforms Section */}
                    <div className="space-y-8">
                        <img
                            src={Logo}
                            alt="Logo"
                            width={48}
                            height={48}
                            className="mb-8"
                        />
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-1">Upwork</h3>
                                <p className="text-gray-400 text-sm">Upwork awarded agency</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Dribbble</h3>
                                <p className="text-gray-400 text-sm">#1 Agency Worldwide</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Clutch</h3>
                                <p className="text-gray-400 text-sm">4.9 proven client's score</p>
                            </div>
                        </div>
                    </div>
                    {/* Features Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 mt-2 flex justify-center md:justify-start">FEATURES</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/appointment-scheduling" className="text-gray-400 hover:text-white transition">
                                    Appointment Scheduling
                                </Link>
                            </li>
                            <li>
                                <Link to="/class-scheduling" className="text-gray-400 hover:text-white transition">
                                    Class Scheduling
                                </Link>
                            </li>
                            <li>
                                <Link to="/custom-reporting" className="text-gray-400 hover:text-white transition">
                                    Custom Reporting
                                </Link>
                            </li>
                            <li>
                                <Link to="/inventory-management" className="text-gray-400 hover:text-white transition">
                                    Inventory Management
                                </Link>
                            </li>
                            <li>
                                <Link to="/mobile-app" className="text-gray-400 hover:text-white transition">
                                    Mobile App
                                </Link>
                            </li>
                            <li>
                                <Link to="/payment-processing" className="text-gray-400 hover:text-white transition">
                                    Payment Processing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3 md:mt-14">
                            <li>
                                <Link to="/waitlist" className="text-gray-400 hover:text-white transition">
                                    Waitlist
                                </Link>
                            </li>
                            <li>
                                <Link to="/automated-notifications" className="text-gray-400 hover:text-white transition">
                                    Automated Notifications
                                </Link>
                            </li>
                            <li>
                                <Link to="/client-management" className="text-gray-400 hover:text-white transition">
                                    Client Management
                                </Link>
                            </li>
                            <li>
                                <Link to="/discounts" className="text-gray-400 hover:text-white transition">
                                    Discounts
                                </Link>
                            </li>
                            <li>
                                <Link to="/online-booking" className="text-gray-400 hover:text-white transition">
                                    Online Booking
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="text-gray-400 hover:text-white transition">
                                    Calendar
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3 md:mt-14">
                            <li>
                                <Link to="/payroll" className="text-gray-400 hover:text-white transition">
                                    Payroll
                                </Link>
                            </li>
                            <li>
                                <Link to="/waivers" className="text-gray-400 hover:text-white transition">
                                    Waivers
                                </Link>
                            </li>
                            <li>
                                <Link to="/communication" className="text-gray-400 hover:text-white transition">
                                    Communication
                                </Link>
                            </li>
                            <li>
                                <Link to="/packages" className="text-gray-400 hover:text-white transition">
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link to="/staff-management" className="text-gray-400 hover:text-white transition">
                                    Staff Management
                                </Link>
                            </li>
                            <li>
                                <Link to="/loyalty-points" className="text-gray-400 hover:text-white transition">
                                    Loyalty Points
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Resources Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4 mt-2">RESOURCES</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/help-center" className="text-gray-400 hover:text-white transition">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition">
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Timewise Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">TIMEWISE</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/start-free-account" className="text-gray-400 hover:text-white transition">
                                    Start a Free Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/book-demo" className="text-gray-400 hover:text-white transition">
                                    Book a Demo
                                </Link>
                            </li>
                            <li>
                                <Link to="/sign-in" className="text-gray-400 hover:text-white transition">
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-2">
                        <div>
                            <p className="text-white">+38 096 272 2100</p>
                            <p className="text-gray-400">Ukraine, Odessa, 65058</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">INQUIRES</h3>
                            <p className="text-gray-400">mail@halo-lab.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">CAREERS</h3>
                            <p className="text-gray-400">dream@halo-lab.team</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">{new Date().getFullYear()} © <a href="https://kunalportfolio45.netlify.app/"
                    >Kunal Sharma
                    </a>. All rights reserved</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white hover:scale-110 transition">
                            <Facebook className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div >
        </footer >
    )
}

