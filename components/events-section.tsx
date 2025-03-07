"use client"

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import CircularGallery with no SSR
const CircularGallery = dynamic(() => import('../components/CircularGallry'), {
  ssr: false
});

const EventsSection = () => {
  // Memoize eventItems to prevent unnecessary re-renders
  const eventItems = useMemo(() => [
    {
      image: '/assets/pitch_perfect_sales.jpg',
      text: 'Pitch Perfect Sales'
    },
    {
      image: '/assets/caseChornicles.jpg',
      text: 'Case Chronicles'
    },
    {
      image: '/assets/eureka.jpg',
      text: 'Eureka'
    },
    {
      image: '/assets/vyapaar_pe_vichaar.jpg',
      text: 'Vyapaar Pe Vichaar'
    }
  ], []);

  return (
    <section id="events" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Events</h2>
        <div 
          className="h-[calc(100vh-200px)]"
          style={{ 
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <CircularGallery 
            items={eventItems}
            textColor="#ffffff"
            bend={3}
            borderRadius={0.05}
            font="bold 30px DM Sans"
          />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;