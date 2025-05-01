import React from 'react';

const SpeakerDeckSlide: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', // 16:9 aspect ratio (9 ÷ 16 × 100 = 56.25%)
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={`https://speakerdeck.com/player/${id}`}
        frameBorder="0"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default SpeakerDeckSlide;