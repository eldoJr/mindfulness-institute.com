import React from 'react';
import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
}) => {
  return (
    <section 
      className="relative bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.8), rgba(46, 125, 50, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-900 dark:text-green-100 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-green-700 dark:text-green-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && (
              <Button 
                size="lg" 
                onClick={primaryAction.onClick}
                className="text-lg px-8 py-4"
              >
                {primaryAction.text}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant="outline" 
                size="lg" 
                onClick={secondaryAction.onClick}
                className="text-lg px-8 py-4"
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};