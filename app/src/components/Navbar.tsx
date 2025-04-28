import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';

interface NavbarProps {
    scrollToSection: (section: "biography" | "publications" | "skills" | "slides" | "certifications" | "blog" | "contact") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
    const [drawerOpen, setDrawerOpen] = useState(false); // メニュー開閉状態

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // ページトップにスムーズスクロール
    };

    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, cursor: 'pointer' }} // 名前クリックでトップへ移動
                    onClick={scrollToTop}
                >
                    Shumpei, Hatanaka
                </Typography>

                {/* 大画面用メニュー */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Button color="inherit" onClick={() => scrollToSection('biography')}>Biography</Button>
                    <Button color="inherit" onClick={() => scrollToSection('awards')}>Awards</Button>
                    <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
                    <Button color="inherit" onClick={() => scrollToSection('slides')}>Slides</Button>
                    <Button color="inherit" onClick={() => scrollToSection('certifications')}>Certifications</Button>
                    <Button color="inherit" onClick={() => scrollToSection('blog')}>Blog</Button>
                    <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
                </Box>

                {/* 小画面用ハンバーガーメニュー */}
                <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>

                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        {[
                            'biography', 'publications', 'awards', 'experience',
                            'skills', 'slides', 'certifications', 'portfolio', 'blog', 'contact'
                        ].map((section) => (
                            <ListItemButton key={section} onClick={() => { scrollToSection(section as keyof NavbarProps["scrollToSection"]); setDrawerOpen(false); }}>
                                <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;