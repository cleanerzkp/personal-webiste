export default function Home() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-4rem)]">
            <main className="flex-grow">
                <section id="about" className="py-8 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-lg">
                            We are a cutting-edge company focused on delivering top-notch web solutions.
                        </p>
                    </div>
                </section>

                <section id="features" className="py-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((num) => (
                                <div key={num} className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-2">Feature {num}</h3>
                                    <p>Detail about feature {num}.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}