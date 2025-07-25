"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Star } from "lucide-react";
import Popup from "./PopUp";

const cardData = [
    {
    image: "/assets/ca5.jpg", 
    rating: 4.8,
    price: "$9430",
    discount: "10%",
    eye: "View",
    availability: "Shallow Roads",
    reviews: 150,
    reviewText: "Excellent vehicle! The engine performance exceeded expectations, and it handled long drives without any issues. Interior was luxurious and clean business and family trips. "
},
{
    image: "/assets/car2.jpg", 
    rating: 4.2,
    price: "$2430",
    discount: "10%",
    eye: "View",
    availability: "Paved Roads",
    reviews: 95,
    reviewText: "Comfortable and stylish, highly recommend! It offered a smooth driving experience with great mileage and minimal noise, and the interior space was more than enough for daily commutes."
},
{
    image: "/assets/car3.jpg", 
    rating: 4.6,
    price: "$8830",
    discount: "10%",
    eye: "View",
    availability: "Sand Roads",
    reviews: 200,
    reviewText: "A fantastic car, very reliable and fun to drive! The handling felt responsive, especially on winding roads. There was ample trunk space. Bluetooth and audio features worked flawlessly."
},
{
    image: "/assets/car1.jpg", 
    rating: 4.9,
    price: "$1000",
    discount: "10%",
    eye: "View",
    availability: "Mad Roads",
    reviews: 300,
    reviewText: "Superb experience, the car was in great condition! Everything from the brakes to the AC worked like new. The ride was incredibly smooth, even on bumpy roads."
},
{
    image: "/assets/car6.jpg", 
    rating: 4.3,
    price: "$1200",
    discount: "10%",
    eye: "View",
    availability: "Gravel Roads",
    reviews: 250,
    reviewText: "Very comfortable and spacious, It had plenty of legroom and luggage space, which was great for our family vacation. Air conditioning worked efficiently, even in hot weather."
},
{
    image: "/assets/NO4.jpg", 
    rating: 4.1,
    price: "$4300",
    discount: "10%",
    eye: "View",
    availability: "Mount Roads",
    reviews: 80,
    reviewText: "Good value for money, enjoyed the ride! The car was surprisingly powerful for its size and easy to maneuver in tight spaces.It’s well-suited for both city driving and short weekend getaways. "
}
];

const getAnimationProps = (index) => {
    if (index % 3 === 0) {
        return { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } };
    } else if (index % 3 === 1) {
        return { initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 } };
    } else {
        return { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } };
    }
};

const ServiceCard = () => {
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [selectedCard, setSelectedCard] = useState(null); // To track the selected card for modal

    const handleModalOpen = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 relative">
            {cardData.map((card, index) => {
                const animation = getAnimationProps(index);
                return (
                    <motion.div
                        key={index}
                        initial={animation.initial}
                        whileInView={animation.animate}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Card Image */}
                        <img
                            src={card.image}
                            alt={`Card image ${index + 1}`}
                            className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:rounded-md group-hover:scale-105 group-hover:shadow-xl group-hover:blur-sm"
                        />

                        {/* Eye Icon centered */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button onClick={() => handleModalOpen(card)} className="cursor-pointer">
                                <Eye className="text-white" size={60} />
                            </button>
                        </div>

                        {/* Overlay with details */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:rounded-md group-hover:opacity-60 transition-opacity duration-300"></div>

                        {/* Description */}
                        <div className="absolute w-full bottom-0 left-0 p-4 text-white space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-black inline bg-primary-foreground rounded-full px-3 py-1">{card.availability}</p>
                            <p className="text-white font-bold py-1">{card.reviewText}</p>
                            <p className="text-sm flex items-center">
                                <span className="font-bold mr-2">Rating:</span> {card.rating}
                                <span className="text-gray-300 flex items-center gap-1 ml-2">
                                    <Star size={20} className="text-yellow-500 fill-yellow-500" />
                                    <Star size={20} className="text-yellow-500 fill-yellow-500" />
                                    <Star size={20} className="text-yellow-500 fill-yellow-500" />
                                    <Star size={20} className="text-yellow-500 fill-transparent stroke-current left-0 top-0" />
                                </span>
                            </p>
                            <div className="flex justify-between">
                                <p className="font-bold gap-2 flex items-center">
                                    Price: 
                                    <span className="text-green-500 font-normal">
                                        {card.price}
                                    </span> 
                                    Discount:
                                    <span className="text-red-500 font-normal"> 
                                        {card.discount}
                                    </span>
                                </p>
                                <button onClick={() => handleModalOpen(card)} className="cursor-pointer">
                                  <p className="text-black bg-primary-foreground rounded-full px-3 py-1">{card.eye}</p>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
            
            {/* Modal Popup */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[850px]">
                        <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
                        {/* grid start here */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="">
                                {selectedCard && (
                                  <>
                                    <p>
                                        <img src={selectedCard.image} alt="" w-50 h-50 className="rounded-md"/>
                                    </p>
                                    <p><strong>Description:</strong> {selectedCard.reviewText}</p>
                                  </>
                                )}
                            </div>
                            <div className="">
                                <Popup />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleModalClose} className="bg-red-500 text-white py-2 px-4 rounded-lg">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
