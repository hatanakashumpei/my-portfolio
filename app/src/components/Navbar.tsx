import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface NavbarProps {
    scrollToSection: (section: "biography" | "publications" | "awards" | "experience" | "skills" | "slides" | "certifications" | "portfolio" | "blog" | "contact") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ページトップにスムーズスクロール
    };

    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, cursor: 'pointer' }} // カーソルをクリック可能に変更
                    onClick={scrollToTop} // 名前クリックでトップに移動
                >
                    Shumpei, Hatanaka
                </Typography>
                <Button color="inherit" onClick={() => scrollToSection('biography')}>Biography</Button>
                <Button color="inherit" onClick={() => scrollToSection('publications')}>Publications</Button>
                <Button color="inherit" onClick={() => scrollToSection('awards')}>Awards</Button>
                <Button color="inherit" onClick={() => scrollToSection('experience')}>Experience</Button>
                <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
                <Button color="inherit" onClick={() => scrollToSection('slides')}>Slides</Button>
                <Button color="inherit" onClick={() => scrollToSection('certifications')}>Certifications</Button>
                <Button color="inherit" onClick={() => scrollToSection('portfolio')}>Portfolio</Button>
                <Button color="inherit" onClick={() => scrollToSection('blog')}>Blog</Button>
                <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;