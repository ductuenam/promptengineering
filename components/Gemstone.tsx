
import React from 'react';

const Gemstone: React.FC = () => {
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gemGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#9b59b6', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 0.9 }} />
                </linearGradient>
                <linearGradient id="gemGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1abc9c', stopOpacity: 0.7 }} />
                    <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 0.8 }} />
                </linearGradient>
                 <linearGradient id="gemGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#a5e1ff', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: '#3498db', stopOpacity: 0.7 }} />
                </linearGradient>
            </defs>
            <g transform="rotate(15 100 100)">
                <path d="M 100,5 L 195,100 L 100,195 L 5,100 Z" fill="url(#gemGradient1)" />
                <path d="M 100,5 L 150,50 L 195,100 L 150, 150 L 100,195 L 50,150 L 5,100 L 50,50 Z" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.2" />
                <path d="M 100,5 L 50,50 L 100,100 L 150,50 Z" fill="url(#gemGradient3)" opacity="0.8" />
                <path d="M 5,100 L 50,150 L 100,100 L 50,50 Z" fill="url(#gemGradient2)" opacity="0.8" />
                <path d="M 100,195 L 150,150 L 100,100 L 50,150 Z" fill="url(#gemGradient1)" opacity="0.5" />
                <path d="M 195,100 L 150,50 L 100,100 L 150,150 Z" fill="url(#gemGradient2)" opacity="0.8" />
            </g>
        </svg>
    );
};

export default Gemstone;
