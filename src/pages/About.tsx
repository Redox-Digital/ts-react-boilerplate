import React from 'react';
import Hero from '../components/Hero';

export default function About() {
  return (
    <main id="about">
      <Hero page="About" imgPath="../assets/layouts/team-cover.jpg" full />
      <section className="container">About</section>
    </main>
  );
}
