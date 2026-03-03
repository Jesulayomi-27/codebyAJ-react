import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      {/* Add padding top to account for fixed navbar */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
