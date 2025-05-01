import React, { useRef, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Biography from './sections/Biography';
import TimelineSection from './sections/Timeline';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import MyWorks from './sections/MyWorks';
import JurnalClubs from './sections/JurnalClubs';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

type Section =
  | 'biography'
  | 'timeline'
  | 'publications'
  | 'skills'
  | 'my_works'
  | 'jurnal_clubs'
  | 'certifications'
  | 'blog'
  | 'contact';

const App: React.FC = () => {
  const refs = {
    biography: useRef<HTMLDivElement>(null),
    timeline: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    my_works: useRef<HTMLDivElement>(null),
    jurnal_clubs: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  const scrollToSection = (section: Section) => {
    const offsetTop = refs[section].current?.offsetTop || 0;
    window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
  };

  const sections = [
    { key: 'biography', Component: Biography },
    { key: 'timeline', Component: TimelineSection },
    { key: 'publications', Component: Publications },
    { key: 'skills', Component: Skills },
    { key: 'my_works', Component: MyWorks },
    { key: 'jurnal_clubs', Component: JurnalClubs },
    { key: 'certifications', Component: Certifications },
    { key: 'blog', Component: Blog },
    { key: 'contact', Component: Contact },
  ];

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Container sx={{ marginTop: '80px' }}>
        {sections.map((section) => (
          <div key={section.key} ref={refs[section.key as Section]}>
            <section.Component />
          </div>
        ))}
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;