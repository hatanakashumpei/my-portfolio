import React, { useEffect } from 'react';

const SpeakerDeckSlide: React.FC<{ id: string }> = ({ id }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//speakerdeck.com/assets/embed.js';
        script.defer = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div
            className="speakerdeck-embed"
            data-id={id}
            data-ratio="1.777"
            style={{
                maxWidth: '100%',
                width: '100%',
            }}
        ></div>
    );
};

export default SpeakerDeckSlide;