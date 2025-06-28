import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-white p-6 md:p-8 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl leading-none font-semibold"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;