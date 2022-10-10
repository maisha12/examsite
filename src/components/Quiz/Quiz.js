import React from 'react';
import { Col, Row } from 'react-bootstrap';
import QuizCard from '../QuizCard/QuizCard';

const Quiz = ({ quizes }) => {

    return (
        <div className='container'>

            <Row>
                {
                    quizes.map(quiz => <Col><QuizCard
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizCard></Col>)
                }
            </Row>
        </div>
    );
};

export default Quiz;