import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, MapPin, Share2, Info, Phone, MessageSquare, Globe } from 'lucide-react';
import { ThreeScene } from './components/ThreeScene';
import { ASSETS } from './constants';

export default function App() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for backward
  const [showDetails, setShowDetails] = useState(false);

  const visibleAssets = ASSETS.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (visibleCount < ASSETS.length) {
      setVisibleCount(prev => Math.min(prev + 10, ASSETS.length));
    }
  }, [visibleCount]);

  const goToNext = useCallback(() => {
    if (currentIndex < visibleAssets.length - 1) {
      setShowDetails(false);
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, visibleAssets.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setShowDetails(false);
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Handle keyboard for dev testing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') goToNext();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Delay the details appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 1200); // Wait for camera transition to mostly complete
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentAsset = ASSETS[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900 text-slate-50 font-sans">
      {/* 3D Background */}
      <ThreeScene currentIndex={currentIndex} assets={visibleAssets} />

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 pointer-events-auto"
        >
          <MapPin size={16} className="text-orange-400" />
          <span className="text-sm font-medium tracking-tight">Business Discovery 3D</span>
        </motion.div>
        
        <div className="flex gap-2 pointer-events-auto">
          <button className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
            <Info size={18} />
          </button>
        </div>
      </div>

      {/* Centered Minimal Text Hint & Details */}
      <div className="absolute inset-x-0 bottom-12 flex flex-col justify-center items-center px-8 z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {showDetails && (
            <motion.div
              key={currentAsset.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center flex flex-col items-center max-w-lg"
            >
               <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter drop-shadow-2xl mb-1">
                  {currentAsset.title}
               </h2>
               <span className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  {currentAsset.subtitle}
               </span>
               
               {currentAsset.description && (
                 <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="text-white/80 text-[13px] font-medium leading-relaxed bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl mb-6 border border-white/10 shadow-2xl"
                 >
                   {currentAsset.description}
                 </motion.p>
               )}

               <div className="flex flex-col gap-6 pointer-events-auto mt-4 px-6 w-full">
                 <div className="flex gap-4 justify-center">
                   {currentAsset.mobile && (
                     <motion.a
                       href={`tel:${currentAsset.mobile}`}
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.4, type: "spring" }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-blue-400/30 transition-colors"
                       title="Call Now"
                     >
                       <Phone size={20} />
                     </motion.a>
                   )}
                   {currentAsset.whatsapp && (
                     <motion.a
                       href={`https://wa.me/${currentAsset.whatsapp.replace(/\D/g, '')}`}
                       target="_blank"
                       rel="noreferrer"
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.5, type: "spring" }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-green-400/30 transition-colors"
                       title="WhatsApp"
                     >
                       <MessageSquare size={20} />
                     </motion.a>
                   )}
                   {currentAsset.website && (
                     <motion.a
                       href={currentAsset.website}
                       target="_blank"
                       rel="noreferrer"
                       initial={{ scale: 0.8, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.6, type: "spring" }}
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       className="bg-orange-600 hover:bg-orange-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-orange-400/30 transition-colors"
                       title="Website"
                     >
                       <Globe size={20} />
                     </motion.a>
                   )}
                 </div>

                 {currentIndex === visibleAssets.length - 1 && visibleCount < ASSETS.length && (
                   <motion.button
                     onClick={loadMore}
                     initial={{ scale: 0.8, opacity: 0, y: 10 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-white text-slate-900 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] shadow-2xl flex items-center justify-center gap-3 border-2 border-white/50"
                   >
                     Explore Next 10 Businesses <ChevronRight size={18} className="text-orange-500" />
                   </motion.button>
                 )}
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Side Navigation Buttons (Desktop fallback) */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30 pointer-events-none md:flex hidden">
        <button 
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white disabled:opacity-20 pointer-events-auto hover:bg-white/20 transition-all hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-30 pointer-events-none md:flex hidden">
        <button 
          onClick={goToNext}
          disabled={currentIndex === visibleAssets.length - 1}
          className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white disabled:opacity-20 pointer-events-auto hover:bg-white/20 transition-all hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Swipe/Tap Area for Mobile */}
      <div 
         className="absolute inset-0 z-0 touch-none pointer-events-auto"
         onClick={(e) => {
            const width = window.innerWidth;
            if (e.clientX > width * 0.6) goToNext();
            else if (e.clientX < width * 0.4) goToPrev();
         }}
      />

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 max-w-[90vw] overflow-hidden px-4">
         {visibleAssets.map((_, i) => (
            <motion.div
               key={i}
               className={`h-1 rounded-full transition-all duration-500 bg-white shadow-sm flex-shrink-0 ${i === currentIndex ? 'w-8' : 'w-2 opacity-20'}`}
               animate={{ 
                 width: i === currentIndex ? 32 : 8,
                 opacity: i === currentIndex ? 1 : 0.2
               }}
            />
         ))}
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
         <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">Tap side to navigate</span>
      </div>
    </div>
  );
}
