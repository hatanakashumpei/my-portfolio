import React, { useRef, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Biography from './sections/Biography';
import Publications from './sections/Publications';
import Awards from './sections/Awards';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Slides from './sections/Slides';
import Certifications from './sections/Certifications';
import Portfolio from './sections/Portfolio';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const refs = {
    biography: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    slides: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // ヘッダーの高さを動的に取得
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  const scrollToSection = (section: keyof typeof refs) => {
    const offsetTop = refs[section].current?.offsetTop || 0;
    window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Container sx={{ marginTop: '80px' }}>
        <div ref={refs.biography}><Biography /></div>
        <div ref={refs.publications}><Publications /></div>
        <div ref={refs.awards}><Awards /></div>
        <div ref={refs.experience}><Experience /></div>
        <div ref={refs.skills}><Skills /></div>
        <div ref={refs.slides}><Slides /></div>
        <div ref={refs.certifications}><Certifications /></div>
        <div ref={refs.portfolio}><Portfolio /></div>
        <div ref={refs.blog}><Blog /></div>
        <div ref={refs.contact}><Contact /></div>
      </Container>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;