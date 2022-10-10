import React from 'react';
import { Button, Card } from 'react-bootstrap';

const QuizCard = ({ quiz }) => {
    console.log(quiz);
    return (
        <div className='mt-5 container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={quiz.logo} />
                <Card.Body>
                    <Card.Title>
                        {quiz.name}

                    </Card.Title>

                    <Card.Text>

                        Total Question:{quiz.total}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QuizCard;