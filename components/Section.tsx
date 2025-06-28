
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    description?: string;
    children: React.ReactNode;
    titleClassName?: string;
    containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, description, children, titleClassName, containerClassName }) => {
    return (
        <section id={id} className={`mb-16 ${containerClassName || ''}`}>
            <div className={containerClassName ? '' : 'text-center'}>
                 <h2 className={titleClassName || "text-3xl font-bold mb-8 text-primary-deep"}>{title}</h2>
                {description && <p className="text-gray-600 mb-10 max-w-3xl mx-auto">{description}</p>}
            </div>
            {children}
        </section>
    );
};

export default Section;
