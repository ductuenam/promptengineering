import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center mt-16 pt-8 border-t border-gray-300">
             <p className="text-sm text-gray-500">
                Nội dung infographic dựa trên tài liệu "Prompt Engineering Guide" của Google.
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Ghé thăm website cá nhân của tác giả tại{' '}
                <a 
                    href="https://www.ductuenam.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-main hover:underline font-medium"
                >
                    ductuenam.com
                </a>.
            </p>
        </footer>
    );
};

export default Footer;