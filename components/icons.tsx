import React from 'react';

const iconProps = {
    className: "w-8 h-8",
    strokeWidth: "1.5",
};

export const TemperatureIcon: React.FC = () => (
    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0v-5.25a.75.75 0 01.75-.75z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.528 3.282a.75.75 0 00-1.056 0l-4.25 4.25a.75.75 0 000 1.06l4.25 4.25a.75.75 0 001.06 0l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0v-5.25a.75.75 0 01.75-.75z"></path>
    </svg>
);

export const TopKIcon: React.FC = () => (
    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25l3-3-3-3"></path>
    </svg>
);

export const TopPIcon: React.FC = () => (
    <svg {...iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l3 3m0 0l3-3m-3 3v-6m0 6h10.5a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25H9.75" />
    </svg>
);
