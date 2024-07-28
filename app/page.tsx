import React from 'react';
import Hero from '@/components/hero';
import ProjectCard from '@/components/projectcards';
import ExperienceCard from '@/components/experiencecard';
import { projectsData } from "@/lib/projects";
import { experiences } from '@/lib/experience';

const SectionTitle: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="max-w-3xl mx-auto text-center mb-8">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">{title}</h2>
    <p className="text-lg text-muted-foreground">{description}</p>
  </div>
);

const ProjectSection: React.FC = () => (
  <section id="projects" className="py-8 sm:py-12">
    <SectionTitle
      title="Projects"
      description="Innovative solutions I've built during Web3 hackathons and beyond."
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

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-8 sm:py-12">
    <SectionTitle
      title="Experience"
      description="Places where I've contributed and grown as a developer."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {experiences.length > 0 ? (
        experiences.map((experience) => (
          <ExperienceCard
            key={experience.companyName}
            experience={experience}
          />
        ))
      ) : (
        <p className="text-center text-muted-foreground">No experience data available at the moment.</p>
      )}
    </div>
  </section>
);

const Home: React.FC = () => {
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
