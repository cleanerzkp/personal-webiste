import React from 'react';
import Hero from "@/components/hero";
import ProjectCard from '@/components/projectcards';
import ExperienceCard from '@/components/experiencecard';
import { projectsData } from "@/lib/projects";
import { experiences } from '@/lib/experience';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="projects" className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Projects</h2>
            <p className="text-lg text-muted-foreground">
              Innovative solutions I've built during Web3 hackathons and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Experience</h2>
            <p className="text-lg text-muted-foreground">
              Places where I've contributed and grown as a developer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.companyName}
                experience={experience}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}