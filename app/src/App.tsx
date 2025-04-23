import React, { useRef } from 'react';
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
import ScrollToTop from './components/ScrollToTop'; // スクロールボタンをインポート

const App: React.FC = () => {
  const refs = {
    biography: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    sides: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof refs) => {
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
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
        <div ref={refs.sides}><Slides /></div>
        <div ref={refs.certifications}><Certifications /></div>
        <div ref={refs.portfolio}><Portfolio /></div>
        <div ref={refs.blog}><Blog /></div>
        <div ref={refs.contact}><Contact /></div>
      </Container>

      <ScrollToTop /> {/* スクロールトップボタンを追加 */}
    </>
  );
};

export default App;