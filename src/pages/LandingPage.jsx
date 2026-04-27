import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}