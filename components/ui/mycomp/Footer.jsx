import React from "react";
import Link from "next/link";

const Footer = () => {
    const image = "/assets/footer1.jpg";
    const year = new Date().getFullYear();

    // Inline style object for the background image
    const footerStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', // Ensures the image covers the entire element
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    };

    return (
        <div className="p-4 relative">
            <footer
            className="w-full h-72 overflow-hidden rounded-2xl text-center mt-2 grid grid-cols-1 md:grid-cols-2"
            style={footerStyle} // Apply the inline style here
        > 
            {/* right animation */}
            <div className="gradient-shadow hidden  md:flex flex-col p-10"> 
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">renTAl-CaR</h2>
                </div>
                    <p className="text-primary-foreground font-bold rounded-full px-3 py-1">
                        Contact Us
                    </p>
                    <p className="text-white font-bold">
                        We are a car rental company dedicated to providing the best car rental experience.
                       Our fleet is modern, our prices are competitive, and our service is always friendly and reliable.
                    </p>
            </div>

            {/* left animation */}
            <div className="grid grid-cols-2 gap-2 p-10 gradient-shadow-left">
                <div className="text-white">
                    <h2 className="font-semibold mb-2">QUICK LINKS</h2>
                    <ul className="space-y-1 font-bold">
                        <li className="hover:text-primary">
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/services">Services</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/contact">Contact Us</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/privacy">Blogs</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/terms">Add cart</Link>
                        </li>
                    </ul>
                </div>
                <div className="text-white text-bold">
                    <h2 className="font-bold mb-2">INFORMATION</h2>
                    <ul className="space-y-1 font-bold">
                        <li className="hover:text-primary">
                            <Link href="/terms">Terms of Service</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/privacy">Privacy Policy</Link>
                        </li>
                        <li className="hover:text-primary">
                            <Link href="/terms">Cookies Setting</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
            <span className="absolute bottom-3 left-0 right-0 text-center text-white bg-opacity-50 p-2">
                &copy; {year} Pro design. All rights reserved.
            </span>
        </div>
    );
};

export default Footer;