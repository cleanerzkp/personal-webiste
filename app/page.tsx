import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300">Kacper Karbownik</h1>
        <h2 className="text-2xl text-blue-500 dark:text-blue-200">Full-stack + Smart Contract Developer</h2>
      </header>

      <section className="text-center mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400">About Me</h3>
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-200">
          I'm a full-stack developer with a passion for web3 technologies. I enjoy creating user-friendly web applications and optimizing backend processes. I stay updated with the latest trends and enjoy continuously improving my skills and the projects I work on.
        </p>
      </section>

      <section className="text-center mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">My Skills</h3>
        <ul className="text-lg mt-4 list-disc list-inside text-gray-800 dark:text-gray-200">
          <li>JavaScript, TypeScript, React, Next.js</li>
          <li>Node.js, Express.js, MongoDB</li>
          <li>Solidity, Smart Contracts, Web3.js</li>
          <li>HTML, CSS, Tailwind CSS</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
      </section>

      <section className="text-center mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400">Projects</h3>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-red-400 dark:text-red-300">Project 1</h4>
          <p className="text-lg text-gray-800 dark:text-gray-200">Description of project 1.</p>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-red-400 dark:text-red-300">Project 2</h4>
          <p className="text-lg text-gray-800 dark:text-gray-200">Description of project 2.</p>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-semibold text-red-400 dark:text-red-300">Project 3</h4>
          <p className="text-lg text-gray-800 dark:text-gray-200">Description of project 3.</p>
        </div>
      </section>

      <section className="text-center mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">Contact Me</h3>
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-200">
          Feel free to reach out to me through the following platforms:
        </p>
        <ul className="text-lg mt-4 list-disc list-inside text-gray-800 dark:text-gray-200">
          <li>Email: kacper@example.com</li>
          <li>LinkedIn: <a href="https://linkedin.com/in/kacper" target="_blank" className="text-blue-500 dark:text-blue-300">linkedin.com/in/kacper</a></li>
          <li>GitHub: <a href="https://github.com/kacper" target="_blank" className="text-blue-500 dark:text-blue-300">github.com/kacper</a></li>
        </ul>
      </section>

      <footer className="mt-12">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 dark:text-gray-200"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </main>
  );
}