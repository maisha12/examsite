import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ quiz }) => {
    const navigate = useNavigate()
    const navHandle = () => {
        navigate(`/details/${quiz.id}`)
    }
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

                    <Button onClick={navHandle} variant="primary">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default QuizCard;