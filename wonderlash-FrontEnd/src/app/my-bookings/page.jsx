
import { CancelBookingItem } from "@/components/shared/CancelBookingItem";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoPinOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const MyBookingsPage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
   
  const user = session?.user;
    console.log(user);

     const res = await fetch(`https://wanderlast-travelapps-backend.onrender.com/bookings/${user?.id}`);
     const bookings = await res.json();

      console.log(bookings);    

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800">My Bookings</h1>
      <p className="text-gray-400 mt-1 mb-8">
        Manage and view your upcoming travel plans
      </p>

      {/* Booking Cards */}
      <div className="flex flex-col gap-4">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            {/* Left Image */}
            <Image
              src={booking.imageUrl}
              alt={booking.destinationName}
              width={300}
              height={200}
              className="object-cover shrink-0"
            />

            {/* Right Content */}
            <div className="flex flex-col justify-between w-full p-5">
              <div>

                {/* Status Badge */}
                <span
                  className={`inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full mb-2
                    ${booking.status === "confirmed"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-500"
                    }`}
                >
                  {booking.status === "confirmed" ? "✓" : "⏳"} 
                  {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                </span>

                {/* Destination Name */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {booking.destinationName}
                </h2>

                {/* Departure Date */}
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <SlCalender /> Departure: {booking.departureDate}
                </p>

                {/* Booking ID */}
                <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                  <IoPinOutline /> Booking ID: {booking._id?.slice(0, 8)}
                </p>
              </div>

              {/* Price + Buttons */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-cyan-500">
                  ${booking.price}
                </span>

                <div className="flex gap-3">
                  {/* Cancel Button */}
                  <CancelBookingItem bookingId={booking._id} />

                  {/* View Button */}
                  <Button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                    <span><FaRegEye /></span> View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
