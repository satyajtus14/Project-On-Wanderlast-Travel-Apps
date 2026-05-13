import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const { imageUrl, price, destinationName, duration, country } = destination;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden p-3">
      
      {/* Image */}
      <Image
        src={imageUrl}
        alt={destinationName}
        width={400}
        height={250}
        className="rounded-lg w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="mt-3">
        
        {/* Country + Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-600">
            <LuMapPin />
            <span>{country}</span>
          </div>

          <h3 className="text-lg font-bold">${price}</h3>
        </div>

        {/* Destination Name */}
        <h2 className="text-lg font-semibold mt-2 leading-tight">
          {destinationName}
        </h2>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <FaRegCalendar />
          <span>{duration}</span>
        </div>
        <Link href={`/destinations/${destination._id}`}>
         <Button variant="outline" className={'mt-1 text-cyan-600 font-bold'} > Book Now <FiExternalLink /> </Button>
        </Link>

      </div>
    </div>
  );
};

export default DestinationCard;