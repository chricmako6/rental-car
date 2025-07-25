"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Heart, Star } from "lucide-react";
import Popup from "@/components/ui/mycomp/PopUp";
import Navbar from "@/components/ui/mycomp/Navbar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // 🆕 Import from shadcn

const cardData = [
    {
    image: "/assets/ca5.jpg", 
    power: "100 HP",
    acceleration: "0-100 in 4.1s",
    speed: "20 km/h",
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
    power: "80 HP",
    acceleration: "0-100 in 5s",
    speed: "22 km/h",
    rating: 4.2,
    price: "$2430",
    discount: "10%",
    eye: "View",
    availability: "Paved Roads",
    reviews: 95,
    reviewText: "Comfortable and stylish, highly recommend! It offered a smooth driving experience with great mileage and minimal noise, and the interior space was more than enough for daily commutes."
},
   {
    image: "/assets/ca5.jpg", 
    power: "100 HP",
    acceleration: "0-100 in 4.1s",
    speed: "20 km/h",
    rating: 4.8,
    price: "$9430",
    discount: "10%",
    eye: "View",
    availability: "Shallow Roads",
    reviews: 150,
    reviewText: "Excellent vehicle! The engine performance exceeded expectations, and it handled long drives without any issues. Interior was luxurious and clean business and family trips. "
},
    {
    image: "/assets/ca5.jpg", 
    power: "100 HP",
    acceleration: "0-100 in 4.1s",
    speed: "20 km/h",
    rating: 4.8,
    price: "$9430",
    discount: "10%",
    eye: "View",
    availability: "Shallow Roads",
    reviews: 150,
    reviewText: "Excellent vehicle! The engine performance exceeded expectations, and it handled long drives without any issues. Interior was luxurious and clean business and family trips. "
},
{
    image: "/assets/car3.jpg", 
    power: "92 HP",
    acceleration: "0-100 in 9s",
    speed: "28 km/h",
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
    power: "76 HP",
    acceleration: "0-100 in 3.3s",
    speed: "20 km/h",
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
    power: "200 HP",
    acceleration: "0-100 in 1.5s",
    speed: "230 km/h",
    rating: 4.3,
    price: "$1200",
    discount: "10%",
    eye: "View",
    availability: "Gravel Roads",
    reviews: 250,
    reviewText: "Very comfortable and spacious, It had plenty of legroom and luggage space, which was great for our family vacation. Air conditioning worked efficiently, even in hot weather."
},
{
    image: "/assets/car6.jpg", 
    power: "200 HP",
    acceleration: "0-100 in 1.5s",
    speed: "230 km/h",
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
    power: "50 HP",
    acceleration: "0-100 in 6.5s",
    speed: "190 km/h",
    rating: 4.1,
    price: "$4300",
    discount: "10%",
    eye: "View",
    availability: "Mount Roads",
    reviews: 80,
    reviewText: "Good value for money, enjoyed the ride! The car was surprisingly powerful for its size and easy to maneuver in tight spaces.It’s well-suited for both city driving and short weekend getaways. "
},
{
    image: "/assets/NO4.jpg", 
    power: "50 HP",
    acceleration: "0-100 in 6.5s",
    speed: "190 km/h",
    rating: 4.1,
    price: "$4300",
    discount: "10%",
    eye: "View",
    availability: "Mount Roads",
    reviews: 80,
    reviewText: "Good value for money, enjoyed the ride! The car was surprisingly powerful for its size and easy to maneuver in tight spaces.It’s well-suited for both city driving and short weekend getaways. "
},
{
    image: "/assets/car1.jpg", 
    power: "76 HP",
    acceleration: "0-100 in 3.3s",
    speed: "20 km/h",
    rating: 4.9,
    price: "$1000",
    discount: "10%",
    eye: "View",
    availability: "Mad Roads",
    reviews: 300,
    reviewText: "Superb experience, the car was in great condition! Everything from the brakes to the AC worked like new. The ride was incredibly smooth, even on bumpy roads."
},
{
    image: "/assets/car1.jpg", 
    power: "76 HP",
    acceleration: "0-100 in 3.3s",
    speed: "20 km/h",
    rating: 4.9,
    price: "$1000",
    discount: "10%",
    eye: "View",
    availability: "Mad Roads",
    reviews: 300,
    reviewText: "Superb experience, the car was in great condition! Everything from the brakes to the AC worked like new. The ride was incredibly smooth, even on bumpy roads."
},
{
    image: "/assets/car1.jpg", 
    power: "76 HP",
    acceleration: "0-100 in 3.3s",
    speed: "20 km/h",
    rating: 4.9,
    price: "$1000",
    discount: "10%",
    eye: "View",
    availability: "Mad Roads",
    reviews: 300,
    reviewText: "Superb experience, the car was in great condition! Everything from the brakes to the AC worked like new. The ride was incredibly smooth, even on bumpy roads."
},
{
    image: "/assets/NO4.jpg", 
    power: "50 HP",
    acceleration: "0-100 in 6.5s",
    speed: "190 km/h",
    rating: 4.1,
    price: "$4300",
    discount: "10%",
    eye: "View",
    availability: "Mount Roads",
    reviews: 80,
    reviewText: "Good value for money, enjoyed the ride! The car was surprisingly powerful for its size and easy to maneuver in tight spaces.It’s well-suited for both city driving and short weekend getaways. "
},
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

const morevehicles = () => {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // 🆕 Pagination logic
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const pageCount = Math.ceil(cardData.length / itemsPerPage);
  const paginatedData = cardData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleNext = () => {
    if (page < pageCount) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleModalOpen = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="shadow-bottom">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 relative">
          {/* 🆕 Use paginatedData */}
          {paginatedData.map((card, index) => {
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
                <img
                  src={card.image}
                  alt={`Card image ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:rounded-md group-hover:scale-105 group-hover:shadow-xl group-hover:blur-sm"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button onClick={() => handleModalOpen(card)} className="cursor-pointer">
                    <Eye className="text-white" size={60} />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:rounded-md group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute w-full bottom-0 left-0 p-4 text-white space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-black inline bg-primary-foreground rounded-full px-3 py-1">{card.availability}</p>
                  <p className="text-white font-bold py-1">{card.reviewText}</p>
                  <p className="text-sm flex items-center">
                    <span className="font-bold mr-2">Rating:</span> {card.rating}
                    <span className="text-gray-300 flex items-center gap-1 ml-2">
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                      <Star size={20} className="text-yellow-500 fill-transparent stroke-current" />
                    </span>
                  </p>
                  <div className="flex justify-between">
                    <p className="font-bold gap-2 flex items-center">
                      Price:
                      <span className="text-green-500 font-normal">{card.price}</span>
                      Discount:
                      <span className="text-red-500 font-normal">{card.discount}</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    {selectedCard && (
                      <>
                        <div className="relative block">
                          <img
                            src={selectedCard.image}
                            alt=""
                            className="w-full object-cover h-50 rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                          />
                          <p>
                            <span className="text-black inline bg-primary-foreground rounded-full px-3 py-1 top-2 left-2 absolute">
                              {selectedCard.availability}
                            </span>
                          </p>
                          <button
                            onClick={() => setLiked(!liked)}
                            className="absolute top-2 right-2"
                          >
                            <Heart
                              className={`w-6 h-6 transition-all duration-300 ${
                                liked ? "text-red-600 fill-red-600" : "text-primary-foreground"
                              }`}
                            />
                          </button>
                        </div>
                        <div className="mt-2 border-2 p-4 justify-center rounded-lg shadow-md flex divide-x divide-gray-300">
                          <div className="pr-4 px-2">
                            <p className="font-normal text-sm">
                              Power<br />
                              <span className="font-bold text-lg">{selectedCard.power}</span>
                            </p>
                          </div>
                          <div className="px-5">
                            <p className="font-normal text-sm">
                              Acceleration<br />
                              <span className="font-bold text-lg">{selectedCard.acceleration}</span>
                            </p>
                          </div>
                          <div className="pl-4 px-2">
                            <p className="font-normal text-sm">
                              Speed<br />
                              <span className="font-bold text-lg">{selectedCard.speed}</span>
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <Popup
                      price={selectedCard?.price}
                      discount={selectedCard?.discount}
                      rating={selectedCard?.rating}
                    />
                  </div>
                </div>
                <div className="mt-4 gap-2.5 flex justify-end">
                  <button
                    onClick={handleModalClose}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 🆕 Pagination at the bottom */}
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePrev}
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              <PaginationItem>
                <span className="px-4 py-2 text-sm">Page {page} of {pageCount}</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={handleNext}
                  className={page === pageCount ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default morevehicles;
