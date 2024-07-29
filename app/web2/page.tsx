'use client';

import React from 'react';
import Hero from './hero';

export default function Home() {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <Hero />
            <main className="flex-grow">
            </main>
        </div>
    );
}