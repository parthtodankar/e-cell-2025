"use client";

import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";

// Dynamically import heavy components
const CountdownWithAurora = dynamic(() => import("@/components/countdown-with-aurora"), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-zinc-950" />
});

const SpeakerSponsors = dynamic(() => import("@/components/speaker-sponsors"), {
  ssr: false
});

const ESummitSchedule = dynamic(() => import("@/components/e-summit-schedule"), {
  ssr: false
});

const ESummitPage = () => {
  // Set your target date for E-Summit 2025
  const targetDate = "2025-03-28T10:00:00"; // Adjust this date as needed

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 w-full">
        <CountdownWithAurora 
          targetDate={targetDate}
          colorStops={["#ffd319", "#ff2975", "#8c1eff"]}
          amplitude={0.8}
          blend={0.4}
          speed={0.3}
        />
      </div>
      <ESummitSchedule />
      <SpeakerSponsors />
      {/* centre of tha page  */}
      {/* <Footer /> */}
    </main>
  );
};

export default ESummitPage;
