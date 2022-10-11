import React from 'react';
import { Button, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const Question = ({ topics }) => {
    const { question, options, correctAnswer, id } = topics
    const showAnswer = (Ans) => {
        toast.info(Ans, { autoClose: 2000 })
    }
    const checkAns = (event) => {
        const value = event.target.innerText
        console.log(value);
        if (value === correctAnswer) {
            toast.success('your Answer is Correct', { autoClose: 500 })
        }
        else {
            toast.error('your Answer is InCorrect', { autoClose: 500 })
        }
    }
    return (
        <div className='container mt-5 bg-info p-6 rounded position-relative'>
            <h6>{question}</h6>
            <FontAwesomeIcon onClick={() => showAnswer(correctAnswer)} className='position-absolute top-0 end-0 m-4' icon={faEye}></FontAwesomeIcon>
            <ol>
                {
                    options.map(option => <li onClick={(event) => checkAns(event)} className='p-1 text-start'
                    >{option}</li>)

                }
            </ol>
        </div>
    );
};

export default Question;