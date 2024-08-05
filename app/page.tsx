'use client';

import React, { useEffect } from 'react';
import { track } from '@vercel/analytics/react';
import Hero from '@/components/hero';
import ProjectCard from '@/components/projectcards';
import ExperienceCard from '@/components/experiencecard';
import { projectsData } from "@/lib/projects";
import { experiences } from '@/lib/experience';

const SectionTitle: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="max-w-3xl mx-auto text-center mb-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">{title}</h2>
    <p className="text-lg text-muted-foreground">{description}</p>
  </div>
);

const ProjectSection: React.FC = () => {
  useEffect(() => {
    track('Projects Section Viewed');
  }, []);

  return (
    <section id="projects" className="py-6 sm:py-8">
      <SectionTitle
        title="Projects"
        description="Innovative solutions I&apos;ve built during Web3 hackathons and beyond."
      />
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-2">No projects available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  useEffect(() => {
    track('Experience Section Viewed');
  }, []);

  return (
    <section id="experience" className="py-6 sm:py-8">
      <SectionTitle
        title="Experience"
        description="Professional experience in Web3 development and data analysis."
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
            <p className="text-center text-muted-foreground col-span-2">No experience data available at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    track('Home Page Viewed');

    const handleScroll = () => {
      const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercentage % 25 === 0) { // tracking every 25% scroll
        track('Page Scrolled', { percentage: scrollPercentage });
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        track('Element Clicked', { 
          type: target.tagName, 
          text: target.textContent, 
          id: target.id,
          class: target.className
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectSection />
        <ExperienceSection />
      </div>
    </main>
  );
};

export default Home;