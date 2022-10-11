import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData()
    const data = loadData.data
    return (
        <div className='mt-5 container'>

            <BarChart width={500} height={300} data={data}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey='total'></YAxis>
            </BarChart>

        </div>
    );
};

export default Statistics;