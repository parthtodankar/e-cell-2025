"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ESummitContent from "@/components/ESummitContent";

const ESummitPage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-foreground">
      <Navbar />
      <ESummitContent />
      <Footer />
    </main>
  );
};

export default ESummitPage;