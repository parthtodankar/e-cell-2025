"use client";

import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import ESummitContent from "@/components/ESummitContent";

const ESummitPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          <ESummitContent />
        </div>
      </div> 
      {/* centre of tha page  */}
      {/* <Footer /> */}
    </main>
  );
};

export default ESummitPage;
