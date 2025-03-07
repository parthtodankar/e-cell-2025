"use client"

import React from 'react';
import CircularGallery from '../components/CircularGallry';

const EventsSection = () => {
  const eventItems = [
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
  ];

  return (
    <section className="h-screen w-full bg-black">
      <CircularGallery 
        items={eventItems}
        textColor="#ffffff"
        bend={3}
        borderRadius={0.05}
        font="bold 30px DM Sans"
      />
    </section>
  );
};

export default EventsSection;
