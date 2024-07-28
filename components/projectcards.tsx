import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  emoji: string;
  externalLink?: string;
  githubLink?: string;
  hackathon?: string;
  award?: string;
  date?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, emoji, externalLink, githubLink, hackathon, award, date } = project;

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader className="relative flex flex-col space-y-2 p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{emoji}</span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="absolute top-4 right-4 flex space-x-2">
            {githubLink && (
              <Button variant="ghost" size="icon" asChild>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
            )}
            {externalLink && (
              <Button variant="ghost" size="icon" asChild>
                <a href={externalLink} target="_blank" rel="noopener noreferrer" aria-label="Project Website">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        {date && (
          <p className="text-xs text-muted-foreground">{date}</p>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 flex flex-wrap gap-2">
        {hackathon && (
          <Badge className="text-xs font-medium bg-blue-100 text-blue-800">
            {hackathon}
          </Badge>
        )}
        {award && (
          <Badge className="text-xs font-medium bg-yellow-100 text-yellow-800">
            {award}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;