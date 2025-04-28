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
import './App.css'; // アニメーション用のスタイルを定義するCSSファイルを追加

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

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  // IntersectionObserverを利用したアニメーション設定
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-in');
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
  }, [refs]);

  const scrollToSection = (section: keyof typeof refs) => {
    const offsetTop = refs[section].current?.offsetTop || 0;
    window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Container sx={{ marginTop: '80px' }}>
        <div ref={refs.biography} className="container-animation"><Biography /></div>
        <div ref={refs.publications} className="container-animation"><Publications /></div>
        <div ref={refs.skills} className="container-animation"><Skills /></div>
        <div ref={refs.slides} className="container-animation"><Slides /></div>
        <div ref={refs.certifications} className="container-animation"><Certifications /></div>
        <div ref={refs.blog} className="container-animation"><Blog /></div>
        <div ref={refs.contact} className="container-animation"><Contact /></div>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;