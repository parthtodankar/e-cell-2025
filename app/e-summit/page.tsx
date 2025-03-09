"use client";

import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import CountdownWithAurora from "@/components/countdown-with-aurora";

const ESummitPage = () => {
  // Set your target date for E-Summit 2025
  const targetDate = "2025-03-28T10:00:00"; // Adjust this date as needed

  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#ffd319] via-[#ff2975] to-[#8c1eff] text-transparent bg-clip-text">
          
          </h1>
          <CountdownWithAurora 
            targetDate={targetDate}
            colorStops={["#ffd319", "#ff2975", "#8c1eff"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.5}
          />
        </div>
      </div> 
      {/* centre of tha page  */}
      {/* <Footer /> */}
    </main>
  );
};

export default ESummitPage;
