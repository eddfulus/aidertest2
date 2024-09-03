"use client";

import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Staysini</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          We want to make booking a place to stay as easy as ordering your
          favorite takeout. Our goal is to help you find the perfect spot for
          your trip without the headache.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          We are here to make your life easier when it comes to booking
          accommodations. Here is what we are all about:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>Making booking simple - no confusing forms or hidden fees</li>
          <li>Suggesting places you will love based on what you like</li>
          <li>Being upfront about prices and what you are getting</li>
          <li>Having friendly folks ready to help when you need it</li>
          <li>Always improving our app to serve you better</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
        <p className="text-lg">
          We are committed to taking the stress out of booking your stay. We use
          smart tech and listen to what travelers want to make booking a breeze.
          Our aim? To let you focus on the fun part of traveling, not the
          booking hassle.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
