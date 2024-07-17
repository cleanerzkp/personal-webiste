// pages/index.tsx
import Image from "next/image";
import MainNav from "@/components/navbar";

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Kacper Karbownik</h1>
          <h2 className="text-2xl">Full-stack + Smart Contract Developer</h2>
        </header>
        <section className="text-center">
          <p className="text-lg">
            I'm a full-stack developer with a passion for web3 technologies. I enjoy creating user-friendly web applications and optimizing backend processes. I stay updated with the latest trends and enjoy continuously improving my skills and the projects I work on.
          </p>
        </section>
        <footer className="mt-12">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
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
    </>
  );
}