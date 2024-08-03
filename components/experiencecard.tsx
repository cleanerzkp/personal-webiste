import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  tags: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  const { companyName, position, description, startDate, endDate, tags } = experience;

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="relative flex flex-col space-y-2 p-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{companyName}</h3>
            <h4 className="text-md font-medium text-muted-foreground">{position}</h4>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <p className="text-xs text-muted-foreground">
          {endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-medium">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;