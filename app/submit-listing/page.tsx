'use client'

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function SubmitListing() {
  const [formData, setFormData] = useState({
    homeName: '',
    location: '',
    price: '',
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Upload image to Supabase Storage
      let imagePath = null;
      if (formData.image) {
        const { data, error } = await supabase.storage
          .from('listing-images')
          .upload(`${Date.now()}-${formData.image.name}`, formData.image);
        
        if (error) throw error;
        imagePath = data.path;
      }

      // Insert listing data into Supabase
      const { data, error } = await supabase
        .from('listings')
        .insert([
          {
            home_name: formData.homeName,
            location: formData.location,
            price: parseFloat(formData.price),
            image_url: imagePath,
          },
        ]);

      if (error) throw error;

      alert('Listing submitted successfully!');
      // Reset form
      setFormData({
        homeName: '',
        location: '',
        price: '',
        image: null,
      });
    } catch (error) {
      console.error('Error submitting listing:', error);
      alert('Failed to submit listing. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Submit a Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="homeName" className="block mb-2 font-semibold text-gray-700">Home Name</label>
          <input
            type="text"
            id="homeName"
            name="homeName"
            value={formData.homeName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2 font-semibold text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 font-semibold text-gray-700">Price per Night (MYR)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 font-semibold text-gray-700">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold">
          Submit Listing
        </button>
      </form>
    </div>
  );
}
