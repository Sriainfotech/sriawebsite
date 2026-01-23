import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
// import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';

interface FloatingDotProps {
  index: number;
}

const FloatingDot: React.FC<FloatingDotProps> = ({ index }) => (
  <div
    className="absolute w-2 h-2 bg-gray-200 rounded-full animate-bounce opacity-30"
    style={{
      left: `${20 + index * 15}%`,
      top: `${30 + (index % 2) * 40}%`,
      animationDelay: `${index * 0.5}s`,
      animationDuration: `${2 + Math.random()}s`
    }}
  />
);

const ComingSoon: React.FC = () => {
  const [dots, setDots] = useState<string>('');

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles
              className="w-8 h-8 text-orange-400 animate-spin"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4 text-center">
          Coming Soon
        </h1>

        {/* Animated dots */}
        <div className="text-2xl md:text-3xl text-gray-500 mb-8 h-8 flex items-center">
          <span className="animate-fade-in">We're working on something special</span>
          <span className="text-gray-400 ml-1 w-6">{dots}</span>
        </div>

        {/* Simple floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <FloatingDot key={i} index={i} />
          ))}
        </div>

        <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 3s ease-in-out infinite alternate;
        }
      `}</style>
        <Link to={-1} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
          <ArrowLeft size={16} /> Back
        </Link>
      </div>
    </>
  );
};

export default ComingSoon;