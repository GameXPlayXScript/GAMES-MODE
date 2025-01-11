import React from 'react';
import { Button } from './ui/button';
import { FaAndroid, FaApple } from 'react-icons/fa';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onDownload: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageUrl,
  onDownload,
}) => {
  return (
    <div className="glass rounded-2xl p-6 w-full max-w-md mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex gap-4 justify-center">
        <Button
          onClick={onDownload}
          className="button-glow bg-primary hover:bg-primary/80 text-white flex items-center gap-2 px-6 py-3 rounded-full"
        >
          <FaAndroid className="w-5 h-5" />
          <span>Android</span>
        </Button>
        <Button
          onClick={onDownload}
          className="button-glow bg-primary hover:bg-primary/80 text-white flex items-center gap-2 px-6 py-3 rounded-full"
        >
          <FaApple className="w-5 h-5" />
          <span>iOS</span>
        </Button>
      </div>
    </div>
  );
};

export default GameCard;