import React from 'react';

export default function ContactPage() {
  return (
    <main
      className="max-w-5xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="text-gray-700">
          For more information, please email{' '}
          <a
            href="mailto:email@example.com"
            className="underline"
          >
            email@example.com
          </a>.
        </p>
    </main>
  );
}
