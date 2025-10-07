import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
  onLearnMore?: (program: Program) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ 
  program, 
  onLearnMore 
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <CardHeader>
        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
          {program.title}
        </h3>
        <p className="text-green-700 dark:text-green-300 text-sm">
          {program.description}
        </p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex items-center gap-4 text-sm text-green-600 dark:text-green-400">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{program.targetAudience}</span>
          </div>
        </div>
      </CardContent>
      
      {onLearnMore && (
        <CardFooter>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onLearnMore(program)}
            className="w-full flex items-center justify-center gap-2"
          >
            Learn More
            <ArrowRight size={16} />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};