"use client"
import Navbar from '@/components/Navbar';
import React from 'react';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import WorkSection from '@/components/WorkSection';
import SelectedExperiments from "@/components/SelectedExprtiments"
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const App: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden selection:bg-primary selection:text-white min-h-screen flex flex-col w-full relative">

      {/* Top Loading Indicator Simulation */}
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <BentoGrid />
        <WorkSection />
        <SelectedExperiments />
      </main>

      <Footer />
    </div>
  );
};

export default App;