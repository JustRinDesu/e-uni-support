import React from 'react';

export default async function AboutPage() {

    return (

        <main
            className="max-w-5xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
            style={{ fontFamily: 'var(--font-sans)' }}
        >
            <h1 className="text-3xl font-bold mb-4">About E-Uni Support</h1>
            <p className="mb-8 text-gray-700 leading-relaxed">
                E-Uni Support is dedicated to providing resources and assistance to students and educators.
                Our mission is to foster a collaborative and supportive learning environment through innovative technology and community engagement.
            </p>
            <section className="">
                <h2 className="text-xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                    <li>Accessibility</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Integrity</li>
                </ul>
            </section>
        </main>
    );
}
