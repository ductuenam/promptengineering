import React from 'react';
import type { TechniqueData } from '../types';

interface TechniqueCardProps extends TechniqueData {
    onOpenModal: () => void;
    children?: React.ReactNode;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ title, description, onOpenModal, children, containerClassName, isNew }) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-8 relative overflow-hidden ${containerClassName}`}>
            {isNew && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MỚI</span>
            )}
            <h3 className="text-2xl font-bold text-primary-main mb-3">{title}</h3>
            <p className="text-dark-text mb-4">{description}</p>
             {children}
            <div className="mt-6">
                <button 
                    onClick={onOpenModal}
                    className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-primary-main transition-colors font-medium"
                >
                    Xem chi tiết
                </button>
            </div>
        </div>
    );
};

export default TechniqueCard;