import React from "react";
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { LogIn } from 'lucide-react';

const Navbar = () => {
    const effect1 = "rounded-full hover:bg-primary/80 hover:text-white transition px-3 py-2";
    const effect2 = "rounded-full bg-gray-900 text-white transition px-3 py-2";
    return (

        <nav className="w-full mb-20 flex items-center justify-between px-10 py-2 sticky top-0">
            {/* Logo (left) */}
            <div className="flex items-center gap-2">
                <span className="font-bold text-xl text-primary-foreground">RentalCar</span>
            </div>
            {/* Center navigation links */}
            <div className="flex gap-8 bg-white p-5 rounded-full">
                <Link href="/" className={effect2}>Home</Link>
                <Link href="/about" className={effect1}>About</Link>
                <Link href="/preferences" className={effect1}>Preferences</Link>
            </div>
            {/* Right side: Icons + Login */}
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-primary-foreground hover:text-primary transition">
                    <ShoppingCart size={22} />
                    <span className="hidden md:inline">Cart</span>
                </button>
                <a href="/login" className="flex items-center gap-1 text-primary-foreground hover:text-primary font-medium transition">
                    <LogIn size={22} />
                    <span>Login</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;