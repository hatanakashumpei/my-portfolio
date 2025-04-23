import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // 300px以上スクロールしたら表示
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: "100px", right: "20px" }} // フッターを避けるように調整
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTop;