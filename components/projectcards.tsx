import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface Project {
  id: string;
  title: string;
  description: string;
  logo?: string;
  emoji?: string;
  externalLink?: string;
  githubLink?: string;
  tags?: string[];
  label?: string;
  startDate?: string;
  endDate?: string;
  hackathonWin?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, logo, emoji, externalLink, githubLink, tags, label, startDate, endDate, hackathonWin } = project;

  return (
    <Card className="flex flex-col h-full shadow-lg transition-transform transform hover:scale-105">
      <CardHeader className="flex justify-between items-start p-4">
        <div className="flex items-center">
          {emoji ? (
            <span className="text-2xl mr-2">{emoji}</span>
          ) : logo ? (
            <Image src={logo} alt={`${title} logo`} width={24} height={24} className="rounded-full mr-2" />
          ) : null}
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div className="flex gap-2">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <FaGithub size={20} />
            </a>
          )}
          {externalLink && (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {startDate && (
          <p className="text-xs text-muted-foreground mb-2">
            {endDate ? `${startDate} - ${endDate}` : `Started: ${startDate}`}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 flex flex-wrap gap-2">
        {hackathonWin && (
          <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded-md text-xs font-medium">
            🏆 {hackathonWin}
          </span>
        )}
        {label && (
          <span className="bg-green-100 text-green-800 py-1 px-2 rounded-md text-xs font-medium">
            {label}
          </span>
        )}
        {tags?.map((tag) => (
          <span key={tag} className="bg-purple-100 text-purple-800 py-1 px-2 rounded-md text-xs font-medium">
            {tag}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;