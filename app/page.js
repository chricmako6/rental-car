import React from 'react';
import Link from 'next/link';
import HeroCard from '@/components/ui/mycomp/heroGlass';
import Navbar from '@/components/ui/mycomp/Navbar';
import AboutCard from '@/components/ui/mycomp/AboutCard';
import ServiceCard from '@/components/ui/mycomp/ServicesCard';




export default function Home() {
const picture = "/assets/NO4.jpg";

  return (
    <>
  {/* here section */}
    <section className="w-full h-[670px] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Blurred background image */}
      <img
        src={picture}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-[4px] -z-10"
        style={{ objectPosition: 'center' }}
      />
      <Navbar />
        <h1 className='text-5xl mb-10 font-bold text-white text-center'>
          Turn Your Travel Dreams<br /> <span>Into</span> <br />Epic Adventures
        </h1>
        <p className='text-xl text-white text-center my-5'>
          Pay any time to explore the world with the best car from RentalCar services.
        </p>
      <HeroCard />
    </section>

    {/* about section */}
    <section className='p-5'>
      <h1 className='text-5xl mb-10 font-bold text-center mt-20'>
        Why 50,000+ People Choose Us
      </h1>
      <p className='hidden md:block text-[17px] text-center my-4 w-3xl mx-auto'>
        We are the best car rental service in the world, offering a wide range of vehicles, competitive prices, and exceptional customer service. 
        Our commitment to quality and reliability has made us the preferred choice for travelers worldwide.
      </p>
      <AboutCard />

    {/* auto counter */}
     <div className='flex flex-col md:flex-row gap-6 justify-center items-center p-4 md:p-8'>
        <div className='md:border-r-2 md:border-black/30 mb-10 font-bold text-center mt-20 flex-1'>
            <h1 className='text-2xl'>50,000+</h1>
            <p className='text-black/30'>Happy Customers</p>
        </div>
        <div className='md:border-r-2 md:border-black/30 mb-10 font-bold text-center md:mt-20 flex-1'>
            <h1 className='text-2xl'>4.9/5</h1>
            <p className='text-black/30'>Average Rating</p>
        </div>
        <div className='md:border-r-2 md:border-black/30 mb-10 font-bold text-center md:mt-20 flex-1'>
            <h1 className='text-2xl'>50+</h1>
            <p className='text-black/30'>Countries Served</p>
        </div>
        <div className='mb-10 font-bold text-center md:mt-20 flex-1'>
            <h1 className='text-2xl'>24/7</h1>
            <p className='text-black/30'>Customer Support</p>
        </div>
     </div>
    </section>
    {/* preferences section */}
    <section className='p-5'>
      <h1 className='text-5xl mb-10 font-bold text-center mt-20'>
          Vehicles that will change your life
      </h1>
      <ServiceCard />
      <Link href="/morevehicles" className="">
        <button className='mt-10 px-6 py-2 text-center bg-primary text-white rounded-lg hover:bg-primary/80 transition block mx-auto'>
          Explore Our Fleet
        </button>
      </Link>
      
      <p className='text-center text-gray-500 mt-4'>
          Explore our wide range of vehicles and find the perfect one for your next adventure.
      </p>
    </section>
    </>
  );
}

// Dr.Gabor Mate  Leonard korn come healer