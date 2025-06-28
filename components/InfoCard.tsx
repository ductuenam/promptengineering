import React from 'react';
import type { ModalId } from '../types';

interface InfoCardProps {
    id: ModalId;
    icon: string;
    title: string;
    description: string;
    onOpenModal: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, onOpenModal }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 flex flex-col hover:shadow-xl">
             <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-primary-main mb-2">{title}</h3>
            <p className="text-dark-text flex-grow">{description}</p>
            <button 
                onClick={onOpenModal}
                className="mt-6 px-6 py-2 bg-secondary text-white rounded-full hover:bg-primary-main transition-colors self-center font-medium"
            >
                Xem chi tiết
            </button>
        </div>
    );
};

export default InfoCard;