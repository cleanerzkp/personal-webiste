'use client'

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../lib/projects'

const ProjectCard: React.FC<(typeof projectsData)[0]> = ({ title, description, externalLink, githubLink }) => {
  return (
    <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              </a>
            )}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
      </div>
      <div className="relative h-48 w-full">
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <p className="text-muted-foreground mb-8 text-center">These are some of the last projects that I&apos;ve been working on.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <button className="mt-12 mx-auto block px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all duration-200 ease-in-out hover:opacity-90">
          See all projects
        </button>
      </div>
    </section>
  );
};

export default Projects;