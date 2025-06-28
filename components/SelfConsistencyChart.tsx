import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from 'recharts';

const originalData = [
    'Đáp án A', 
    'Đáp án B', 
    'Đáp án A', 
    'Đáp án C', 
    'Đáp án A', 
    'Đáp án B'
];

const dataCounts = originalData.reduce((acc, label) => {
    acc[label] = (acc[label] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const chartData = Object.keys(dataCounts).map(label => ({
    name: label,
    'Tần suất': dataCounts[label],
}));


const CustomXAxisTick: React.FC<any> = (props) => {
    const { x, y, payload } = props;
    return (
      <Text x={x} y={y} width={75} textAnchor="middle" verticalAnchor="start" dy={10} fill="#374151">
        {payload.value}
      </Text>
    );
};


const SelfConsistencyChart: React.FC = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" height={30} tick={<CustomXAxisTick />} interval={0} />
                    <YAxis allowDecimals={false} label={{ value: 'Số lần xuất hiện', angle: -90, position: 'insideLeft', dx: -10, fill: '#005082', fontWeight: 'bold' }} />
                    <Tooltip 
                      cursor={{fill: 'rgba(0, 161, 228, 0.1)'}}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                      }}
                    />
                     <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="Tần suất" fill="#00A1E4" radius={[5, 5, 0, 0]} barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default SelfConsistencyChart;