/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { About } from './components/About';
import { Filmography } from './components/Filmography';
import { Theatre } from './components/Theatre';
import { ArtGhar } from './components/ArtGhar';
import { Showreel } from './components/Showreel';
import { Gallery } from './components/Gallery';
import { ExperienceSkills } from './components/ExperienceSkills';
import { ContactFooter } from './components/ContactFooter';
import KoseliPopup from './components/KoseliPopup';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F4F1EA] selection:bg-[#F4F1EA] selection:text-[#080808]">
      {/* Subtle tactile monochrome film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 film-grain"
        aria-hidden="true"
      />

      {/* Desktop-only precision custom cursor */}
      <CustomCursor />

      {/* Minimal Floating Navigation */}
      <Navigation />

      {/* Main Narrative Portfolio Flow */}
      <main>
        {/* 1. Hero Section (3D Cutout Depth Composition) */}
        <Hero />

        {/* 2. Editorial Introduction / Statement */}
        <Statement />

        {/* 3. About Santosh ("THE ARTIST") */}
        <About />

        {/* 4. Filmography + Choro, Kotha & Manko Bhasa Features */}
        <Filmography />

        {/* 5. Theatre ("ON STAGE") + Manish Harayeko Suchana Feature */}
        <Theatre />

        {/* 6. Art Ghar ("CREATIVE WORK BEYOND THE FRAME") */}
        <ArtGhar />

        {/* 7. Showreel ("Selected performances and work.") */}
        <Showreel />

        {/* 8. Photography Gallery + Lightbox */}
        <Gallery />

        {/* 9. Experience Timeline + Disciplines & Languages */}
        <ExperienceSkills />
      </main>

      {/* 10. Follow the Work, Contact / Booking & Minimal Footer */}
      <ContactFooter />
      <KoseliPopup />
    </div>
    
  );
}
