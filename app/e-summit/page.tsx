"use client";

import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import CountdownWithAurora from "@/components/countdown-with-aurora";
import ESummitSchedule from "@/components/e-summit-schedule";
import SpeakerSponsors from "@/components/speaker-sponsors";

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
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
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
