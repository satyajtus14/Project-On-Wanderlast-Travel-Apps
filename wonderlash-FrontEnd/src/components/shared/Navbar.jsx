import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-white items-center py-4 px-6 shadow-md text-semibold'>
            <ul className='flex gap-3 items-center'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destinations"}>Destinations</Link></li>
                <li><Link href={"/my-bookings"}>My Bookings</Link></li>
                <li><Link href={"/add-destination"}>Add Destination</Link></li>
                </ul>

                <div>
                    <Image 
                    src={"/assets/Wanderlast.png"} 
                    alt={"logo"} 
                    width={150} 
                    height={150} />
                </div>
                <ul className='flex gap-3 items-center'>
                    <li><Link href={"/profile"}>My Profile</Link></li>
                    <li><Link href={"/login"}>Login</Link></li>
                    <li><Link href={"/signup"}>Sign Up</Link></li>
                </ul>
            
        </nav>
    );
};

export default Navbar;