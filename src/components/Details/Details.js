import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Details = () => {
    const detailsData = useLoaderData()
    const details = detailsData.data
    const { questions } = details;
    return (
        <div>
            {
                questions.map(topics => <Question
                    key={topics.id}
                    topics={topics}
                ></Question>)
            }
        </div>
    );
};

export default Details;