import React from 'react';

const DiagramBox: React.FC<{ x: number; y: number; text: string; isCot?: boolean; isActive?: boolean }> = ({ x, y, text, isCot, isActive }) => {
    const fill = isCot ? '#e0f7fa' : (isActive ? '#dcfce7' : '#fee2e2');
    const stroke = isCot ? '#00A1E4' : (isActive ? '#22c55e' : '#ef4444');
    const textColor = isCot ? '#0891b2' : (isActive ? '#166534' : '#991b1b');
    return (
        <g>
            <rect x={x} y={y} width="60" height="25" rx="5" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <text x={x + 30} y={y + 16} fontSize="10" textAnchor="middle" fill={textColor} fontWeight="500">{text}</text>
        </g>
    );
};

const DiagramArrow: React.FC<{ x1: number, y1: number, x2: number, y2: number }> = ({ x1, y1, x2, y2 }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#a1a1aa" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
);

const TreeOfThoughtsDiagram: React.FC = () => {
    return (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-lg text-center text-primary-deep mb-4">CoT (Tuyến tính) vs. ToT (Phân nhánh)</h4>
            <svg viewBox="0 0 320 200" width="100%" height="auto">
                <defs>
                    <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="0" refY="1.75" orient="auto">
                        <polygon points="0 0, 5 1.75, 0 3.5" fill="#a1a1aa" />
                    </marker>
                </defs>

                {/* CoT Diagram */}
                <DiagramBox x={20} y={10} text="Input" isCot />
                <DiagramArrow x1={50} y1={35} x2={50} y2={55} />
                <DiagramBox x={20} y={55} text="Suy nghĩ 1" isCot />
                <DiagramArrow x1={50} y1={80} x2={50} y2={100} />
                <DiagramBox x={20} y={100} text="Suy nghĩ 2" isCot />
                <path d="M 50 125 V 135" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="3 3" />
                <DiagramArrow x1={50} y1={140} x2={50} y2={160} />
                <DiagramBox x={20} y={160} text="Output" isCot />
                <text x={50} y={195} fontSize="10" fontWeight="bold" textAnchor="middle" fill="#005082">Chain of Thought</text>


                {/* ToT Diagram */}
                <DiagramBox x={180} y={10} text="Input" isActive />
                <DiagramArrow x1={210} y1={35} x2={210} y2={55} />

                {/* Level 1 */}
                <DiagramBox x={110} y={55} text="Nhánh A" />
                <DiagramBox x={180} y={55} text="Nhánh B" isActive />
                <DiagramBox x={250} y={55} text="Nhánh C" />
                <line x1={140} y1={55} x2={240} y2={55} stroke="#d4d4d8" strokeWidth="1.5" />
                
                <DiagramArrow x1={210} y1={80} x2={210} y2={100} />

                {/* Level 2 */}
                <DiagramBox x={145} y={100} text="B.1" />
                <DiagramBox x={215} y={100} text="B.2" isActive/>
                <line x1={175} y1={100} x2={215} y2={100} stroke="#d4d4d8" strokeWidth="1.5" />
                
                <path d="M 210 125 V 135" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="3 3" />
                <DiagramArrow x1={210} y1={140} x2={210} y2={160} />
                <DiagramBox x={180} y={160} text="Output" isActive />
                <text x={210} y={195} fontSize="10" fontWeight="bold" textAnchor="middle" fill="#005082">Tree of Thoughts</text>
            </svg>
        </div>
    );
};

export default TreeOfThoughtsDiagram;