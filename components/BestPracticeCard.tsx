import React from 'react';
import type { BestPracticeData } from '../types';

const BestPracticeCard: React.FC<BestPracticeData> = ({ title, description, doText, dontText, doCode, dontCode }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold text-primary-deep mb-2">{title}</h3>
            <p className="text-dark-text text-sm mb-4 flex-grow">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                {/* DO Column */}
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 flex items-center">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        Nên làm
                    </h4>
                    <p className="text-xs text-emerald-700 italic mt-1 mb-2">{doText}</p>
                    <pre className="bg-emerald-100 text-emerald-900 text-xs p-2 rounded whitespace-pre-wrap font-mono"><code>{doCode}</code></pre>
                </div>
                {/* DON'T Column */}
                 <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 flex items-center">
                         <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.697a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        Không nên
                    </h4>
                    <p className="text-xs text-red-700 italic mt-1 mb-2">{dontText}</p>
                    <pre className="bg-red-100 text-red-900 text-xs p-2 rounded whitespace-pre-wrap font-mono"><code>{dontCode}</code></pre>
                </div>
            </div>
        </div>
    );
};

export default BestPracticeCard;