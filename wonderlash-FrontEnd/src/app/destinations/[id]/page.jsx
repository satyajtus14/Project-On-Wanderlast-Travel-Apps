import { DeleteDestinationByAlert } from "@/components/DeleteDestinationByAlert";
import { EditDestinationByModal } from "@/components/EditDestinationByModal";
import BookingCard from "@/components/shared/BookingCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://wanderlast-travelapps-backend.onrender.com/destination/${id}`);

  const destination = await res.json();

  const {
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    description,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-end gap-2 mt-5 mb-3">
        <EditDestinationByModal  destination={destination}/>  
        <DeleteDestinationByAlert  destination={destination} />    
      </div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <LuMapPin />
              <span>{country}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold">
              {destinationName}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 border-2 border-gray-300 rounded-2xl p-6">
        
        {/* Left Side */}
        <div className="lg:col-span-2">
          
          {/* Description */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              About This Destination
            </h2>

            <p className="text-gray-600 leading-8">
              {description}
            </p>
          </div>

          {/* Tour Info */}
          <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Tour Information
            </h2>

            <div className="flex items-center gap-3 text-gray-700">
              <FaRegCalendar className="text-xl" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Right Side Booking Card */}
        <div>
          <BookingCard destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;