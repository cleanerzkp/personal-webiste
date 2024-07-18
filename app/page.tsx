import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">About Me</h2>
          <p className="text-lg mb-6">
            As a full-stack developer with a passion for web3 technologies, I bridge the gap between traditional web development and blockchain innovations. My expertise spans from crafting intuitive user interfaces to optimizing backend processes and developing smart contracts.
          </p>
          <p className="text-lg">
            I am committed to staying at the forefront of tech trends, continuously refining my skills to deliver cutting-edge solutions that push the boundaries of what's possible in web development.
          </p>
        </div>
      </section>
      
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Backend</h3>
              <ul className="list-disc list-inside">
                <li>Node.js & Express</li>
                <li>MongoDB & SQL</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Web3</h3>
              <ul className="list-disc list-inside">
                <li>Solidity</li>
                <li>Ethereum & EVM</li>
                <li>Smart Contracts</li>
                <li>Web3.js & Ethers.js</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Tools & Others</h3>
              <ul className="list-disc list-inside">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Project {project}</h3>
                  <p className="text-muted-foreground mb-4">Short description of project {project}. Highlight key features or technologies used.</p>
                  <a href="#" className="text-primary hover:text-primary-foreground transition duration-300">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Contact Me</h2>
          <p className="text-lg mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="mailto:kacper@example.com" className="text-primary hover:text-primary-foreground transition duration-300">kacper@example.com</a>
            <a href="https://linkedin.com/in/kacper" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground transition duration-300">LinkedIn</a>
            <a href="https://github.com/kacper" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-foreground transition duration-300">GitHub</a>
          </div>
        </div>
      </section>
      
      <footer className="py-6 bg-card text-center">
        <p className="text-muted-foreground">© 2023 Kacper Karbownik. All rights reserved.</p>
      </footer>
    </main>
  );
}