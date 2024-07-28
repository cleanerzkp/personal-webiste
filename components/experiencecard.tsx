import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface Experience {
  companyName: string;
  logo?: string;
  position: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url: string;
  tags: string[];
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  const { companyName, logo, position, description, startDate, endDate, url, tags } = experience;

  return (
    <Card className="flex flex-col h-full shadow-lg transition-transform transform hover:scale-105">
      <CardHeader className="flex justify-between items-start p-4">
        <div className="flex items-center">
          {logo && <Image src={logo} alt={`${companyName} logo`} width={24} height={24} className="rounded-full mr-2" />}
          <h3 className="text-lg font-bold">{companyName}</h3>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
          <ExternalLink size={20} />
        </a>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h4 className="text-md font-semibold text-muted-foreground mb-2">{position}</h4>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {startDate && (
          <p className="text-xs text-muted-foreground mb-2">
            {endDate ? `${startDate} - ${endDate}` : `Started: ${startDate}`}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-800 py-1 px-2 rounded-md text-xs font-medium">
            {tag}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;