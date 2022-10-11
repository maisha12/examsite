import React from 'react';
import { Button } from 'react-bootstrap';

const Question = ({ topics }) => {
    const { question, options, correctAnswer, id } = topics
    return (
        <div className='container mt-5 bg-info p-5 rounded'>
            <h2>${question}</h2>
            <ol>
                {
                    options.map(option => <li className='p-1 text-start'
                    >${option}</li>)
                }
            </ol>
        </div>
    );
};

export default Question;