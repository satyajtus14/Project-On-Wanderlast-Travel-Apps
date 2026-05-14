import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('https://wanderlast-travelapps-backend.onrender.com/destinations');
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'>All Destinations</h1>
            <div className='grid grid-cols-4 gap-2'>
                 {destinations.map((destination) => (
                <DestinationCard key={destination._id} 

                destination={destination} 
                />
                    
                
            ))}
            </div>
            
        </div>
    );
};

export default DestinationPage;
