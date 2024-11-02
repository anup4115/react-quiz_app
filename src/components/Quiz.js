import React, { useState } from 'react';
import QuestionList from './QuestionList';
import QuizCSS from './Quiz.css'
const Quiz = () => {
    const querry = [
        {
            question: "What is the capital city of Nepal?",
            options: ["Pokhara", "Dhaka", "Kanchanpur", "Kathmandu"],
            answer: "Kathmandu"
        },
        {
            question: "National bird of USA is...",
            options: ["Danfe", "Eagle", "Ostrich", "Vulture"],
            answer: "Eagle"
        },
        {
            question: "How many FIFA World cups has Germany won till now?",
            options: ["3", "4", "7", "9"],
            answer: "4"
        },
        {
            question: "What is the largest forest in the World?",
            options: ["Burmese", "Valdivian", "Primorye", "Amazon"],
            answer: "Amazon"
        },
        {
            question: "What is the biggest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
            answer: "Blue Whale"
        },
    ];

    const [questionval, setQuestionval] = useState(0);
    const [currentAnswer,setCurrentAnswer] = useState(null);
    const [score,setScore] = useState(0)
    const handleClick=(option)=>{
        setCurrentAnswer(option)
        if(option===querry[questionval].answer){
            setScore(score+10)
        }
    }
    const handleNextQuestion=()=>{
        setQuestionval(questionval+1);
        setCurrentAnswer(null);
    }
    return (
        <>
        <div className='container'>
            {questionval<querry.length?<div>
                <QuestionList question={querry[questionval].question} options={querry[questionval].options}  handleClick={handleClick} currentAnswer={currentAnswer} />
            <button disabled={currentAnswer === null} className={currentAnswer===null?'button-disable':'button'} onClick={handleNextQuestion} >Next Question</button>

            </div>:<h2>Your score is : {score}</h2>}</div>
        </>
    );
}

export default Quiz;
