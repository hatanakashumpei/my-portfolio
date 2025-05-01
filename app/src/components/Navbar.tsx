import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';

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

interface NavbarProps {
  scrollToSection: (section: Section) => void;
}

const sections = [
  { id: 'biography', label: '自己紹介' },
  { id: 'timeline', label: '略歴' },
  { id: 'publications', label: '業績' },
  { id: 'skills', label: 'スキル' },
  { id: 'my_works', label: '研究内容' },
  { id: 'jurnal_clubs', label: '輪講スライド' },
  { id: 'certifications', label: '資格' },
  { id: 'blog', label: 'ブログ' },
  { id: 'contact', label: '連絡先' },
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={scrollToTop}
        >
          Shumpei, Hatanaka
        </Typography>

        {/* 大画面用メニュー */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              color="inherit"
              onClick={() => scrollToSection(section.id as Section)}
            >
              {section.label}
            </Button>
          ))}
        </Box>

        {/* 小画面用ハンバーガーメニュー */}
        <IconButton
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {sections.map((section) => (
              <ListItemButton
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id as Section);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText primary={section.label} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;