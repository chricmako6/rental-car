"use client";
import React from "react";
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { useCart } from '../../../hooks/CartProvider';

const Navbar = () => {
    const { cartCount } = useCart(); 

    const effect1 = "rounded-full hover:bg-primary/80 hover:text-white transition px-3 py-2";
    const effect2 = "rounded-full bg-gray-900 text-white transition px-3 py-2";
    const addCart = "hidden md:inline absolute top-1/3 right-2/3 bg-red-500 text-sm text-primary-foreground rounded-full w-5 h-5 justify-center items-center"
    return (

        <nav className="w-full mb-20 flex items-center justify-between px-10 py-2">
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
            <div className="flex items-center gap-4 relative">
                <Link href="/Carts">
                  <button className="flex items-center gap-1 text-primary-foreground hover:text-primary transition">
                    <ShoppingCart size={25} /> 
                   <span className={addCart}>{cartCount}</span>
                  </button>
                </Link>
                <a href="/login" className="flex items-center gap-1 text-primary-foreground hover:text-primary font-medium transition">
                    <LogIn size={25} />
                    <span>Login</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;