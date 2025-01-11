import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    // Replace this URL with your OGADS Content Locker URL
    window.location.href = 'https://installchecker.com/cl/i/e6wg9l';
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
            Game Download Platform
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Download and play the latest games on your mobile device
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GameCard
            title="Amazing Game Title"
            description="Experience an incredible gaming adventure with stunning graphics and immersive gameplay. Perfect for both casual and hardcore gamers."
            imageUrl="/placeholder.svg"
            onDownload={handleDownload}
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400">
            By downloading, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;