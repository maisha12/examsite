import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData();
    return (
        <div>
            <div className='mt-5 container'>
                <Card>
                    <Card.Header>Welcome To Exam-Site Website </Card.Header>
                    <Card.Body>
                        <h4>An exam is a formal test that you take to show your knowledge or ability in a particular subject, or to obtain a qualification.</h4>
                        <Card.Title>Here, we can see the all courses quiz Details!!!</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <Quiz quizes={quizes.data}></Quiz>
        </div>
    );
};

export default Home;