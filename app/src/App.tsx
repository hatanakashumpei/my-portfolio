import React, { useRef, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Biography from './sections/Biography';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Slides from './sections/Slides';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App: React.FC = () => {
  const refs = {
    biography: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    slides: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const [navbarHeight, setNavbarHeight] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // スクロール方向を判定
          const isScrollingDown = scrollTop > lastScrollTop;
          setLastScrollTop(scrollTop);

          if (entry.isIntersecting) {
            entry.target.classList.add(isScrollingDown ? 'slide-from-bottom' : 'slide-from-top');
          } else {
            entry.target.classList.remove('slide-from-bottom', 'slide-from-top');
          }
        });
      },
      {
        threshold: 0.2, // 20%が画面に入るとアニメーションをトリガー
      }
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [refs, lastScrollTop]);

  const scrollToSection = (section: keyof typeof refs) => {
    const offsetTop = refs[section].current?.offsetTop || 0;
    window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
  };

  const sections = [
    { key: 'biography', Component: Biography },
    { key: 'publications', Component: Publications },
    { key: 'skills', Component: Skills },
    { key: 'slides', Component: Slides },
    { key: 'certifications', Component: Certifications },
    { key: 'blog', Component: Blog },
    { key: 'contact', Component: Contact },
  ];

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Container sx={{ marginTop: '80px' }}>
        {sections.map((section) => (
          <div
            key={section.key}
            ref={refs[section.key as keyof typeof refs]}
            className="container-animation"
          >
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