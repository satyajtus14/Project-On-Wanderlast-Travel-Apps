"use client";

import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
    const { _id, price, country, duration,destinationName,imageUrl } = destination;
    
    // Get user session
    const { data: session} = authClient.useSession() 
       const user = session?.user;
       console.log(user);

       // State for selected departure date
     const [selectedDate, setSelectedDate] = useState(null);
     console.log(new Date(selectedDate));
     
     console.log(destination);

     // Handle booking logic
     const handleBooking = async () => {
  // Step 1 — Validate first
  if (!user) {
    toast("Please log in to book this destination.");
    return;
  }

  if (!selectedDate) {
    toast("Please select a departure date.");
    return;
  }

  // Step 2 — Build booking data
  const bookingData = {
    userId: user?.id,
    userImage: user?.image,
    userName: user?.name,
    destinationId: _id || null,
    destinationName: destinationName || null,
    departureDate: selectedDate,
    imageUrl: imageUrl || null,
    price: price || null,
    country: country || null,
    duration: duration || null,
  };

  console.log('Sending booking data:', bookingData); // ✅ check this first

  // Step 3 — Send to backend call booking API
  try {
    const response = await fetch('http://localhost:5001/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    console.log('Server response:', data); // ✅ check server response

    if (response.ok) {
      toast(`Booking confirmed for ${country} on ${selectedDate}!`);
    } else {
      toast('Booking failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    toast('An error occurred. Please try again.');
  }
};


      // console.log(bookDestination);

  return (
    <Card className="w-full lg:w-[350px] border-2 border-gray-200 rounded-2xl p-0">
          <div className="bg-white shadow-xl rounded-2xl p-6 sticky top-24">

      <h3 className="text-4xl font-bold text-blue-600">
        ${price}
      </h3>

      <p className="text-gray-500 mt-1">
        Per Person
      </p>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl mt-6 font-semibold transition" onClick={handleBooking}>
        Book Now
      </button>

      <button className="w-full border border-gray-300 py-3 rounded-xl mt-3 font-semibold hover:bg-gray-100 transition">
        Save Destination
      </button>

      <div className="border-t mt-6 pt-6 space-y-5 text-gray-600">

        {/* COUNTRY */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Country</span>
          <span>{country}</span>
        </div>

        {/* DATE INPUT */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-md font-semibold">
            Departure Date
          </label>

          <input
            type="date"
            name="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* DURATION */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Duration</span>
          <span>{duration}</span>
        </div>

      </div>
    </div>

    </Card>
  );
};

export default BookingCard;