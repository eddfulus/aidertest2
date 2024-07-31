'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

const dummyListings = [
  {
    id: 1,
    homeName: 'Beachfront Villa',
    location: 'Langkawi',
    price: 500,
    imageUrl: 'https://picsum.photos/seed/1/300/200',
  },
  {
    id: 2,
    homeName: 'City Center Apartment',
    location: 'Kuala Lumpur',
    price: 200,
    imageUrl: 'https://picsum.photos/seed/2/300/200',
  },
  {
    id: 3,
    homeName: 'Mountain Retreat',
    location: 'Cameron Highlands',
    price: 300,
    imageUrl: 'https://picsum.photos/seed/3/300/200',
  },
  {
    id: 4,
    homeName: 'Tropical Island Bungalow',
    location: 'Perhentian Islands',
    price: 400,
    imageUrl: 'https://picsum.photos/seed/4/300/200',
  },
  {
    id: 5,
    homeName: 'Heritage Shophouse',
    location: 'Penang',
    price: 250,
    imageUrl: 'https://picsum.photos/seed/5/300/200',
  },
  {
    id: 6,
    homeName: 'Rainforest Chalet',
    location: 'Taman Negara',
    price: 350,
    imageUrl: 'https://picsum.photos/seed/6/300/200',
  },
];

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setListings(dummyListings);
      setIsLoading(false);
      console.log('Listings set:', dummyListings);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Vacation Rentals in Malaysia</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={listing.imageUrl}
              alt={listing.homeName}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              unoptimized
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{listing.homeName}</h2>
              <p className="text-gray-600 mb-2">{listing.location}</p>
              <p className="text-blue-600 font-bold">MYR {listing.price} / night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
