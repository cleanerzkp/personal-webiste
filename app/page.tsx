import Image from "next/image";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

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

      <Projects />

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
    </main>
  );
}