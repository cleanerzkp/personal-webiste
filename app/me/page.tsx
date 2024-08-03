'use client';
import React from 'react';
import Hero from './hero';
import ProjectCard from '@/components/projectcards';
import ExperienceCard from '@/components/experiencecard';
import { projectsData } from './projects';
import { experiences } from './experience';

const SectionTitle: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="max-w-3xl mx-auto text-center mb-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">{title}</h2>
    <p className="text-lg text-muted-foreground">{description}</p>
  </div>
);

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-6 sm:py-8">
    <SectionTitle
      title="Experience"
      description="My professional journey and key roles in the Web3 industry."
    />
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {experiences.length > 0 ? (
          experiences.map((experience) => (
            <ExperienceCard
              key={experience.companyName}
              experience={experience}
            />
          ))
        ) : (
          <p className="text-center text-muted-foreground col-span-2">
            No experience data available at the moment.
          </p>
        )}
      </div>
    </div>
  </section>
);

const ProjectSection: React.FC = () => (
  <section id="projects" className="py-6 sm:py-8">
    <SectionTitle
      title="Projects"
      description="Web3 projects I've developed, showcasing my expertise and innovation."
    />
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-muted-foreground col-span-2">
            No projects available at the moment.
          </p>
        )}
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Hero />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceSection />
        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;