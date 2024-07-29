'use client';

import React from 'react';
import Hero from './Hero'; // Ensure this path matches where your Hero component is located

export default function Home() {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Hero onViewProjects={() => handleScroll('features')} onContact={() => window.open('https://t.me/yourtelegram', '_blank')} /> {/* Hero Section */}

            <main className="flex-grow">
            </main>
        </div>
    );
}