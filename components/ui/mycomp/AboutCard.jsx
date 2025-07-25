"use client";
import React from "react";
import { motion } from "framer-motion";

const aboutCards = [
    {
        title: "Expert Local Guides",
        desc: "RentalCar is dedicated to providing the best car rental experience. Our fleet is modern, our prices are competitive, always friendly and reliable.",
    },
    {
        title: "Flexible Payment Plans",
        desc: "To make car rental easy, affordable, and accessible for everyone. We strive to deliver top-notch service and a seamless booking process.",
    },
    {
        title: "Solo-Friendly Groups",
        desc: "We offer a wide range of vehicles, 24/7 customer support, and easy online booking. Your satisfaction and safety are our priorities.",
    },
];

const AboutCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {aboutCards.map((card, id) => {
                let initialPosition;
                let finalPosition;

                // Set initial and final positions based on the card index
                if (id === 0) {
                    initialPosition = { opacity: 0, x: -100 }; // From left
                    finalPosition = { opacity: 1, x: 0 };
                } else if (id === 1) {
                    initialPosition = { opacity: 0, y: 100 }; // From bottom
                    finalPosition = { opacity: 1, y: 0 };
                } else if (id === 2) {
                    initialPosition = { opacity: 0, x: 100 }; // From right
                    finalPosition = { opacity: 1, x: 0 };
                }

                return (
                    <motion.div
                        key={id}
                        initial={initialPosition}
                        whileInView={finalPosition}
                        viewport={{ once: true, amount: 0.2 }} 
                        transition={{ duration: 0.5, ease: 'linear' }}
                        className="w-[320px] bg-gray-200/30 backdrop-blur rounded-xl shadow-lg p-6 flex flex-col items-center"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-primary">{card.title}</h2>
                        <p className="text-gray-700 text-center mb-4">{card.desc}</p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default AboutCard;
