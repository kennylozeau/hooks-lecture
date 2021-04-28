import { useState, useEffect } from 'react';
import { formatQuestions } from '../utils/format_util';
import Question from './QuestionHooks';

function Quiz() {
    const [trivia, setTrivia] = useState([]);
    const [currentQuestion, setCurrentQuestion]  = useState(0);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=51&category=27&type=multiple')
            .then(response => response.json())
            .then(data => {
                let questions = formatQuestions(data);
                setTrivia(questions);
            });
    }, []);

    function nextQuestion() {
        let nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
    }

    if (trivia.length === 0) {
        return <h1>Loading Questions</h1>
    } else {
        return (
            <Question
                trivia={trivia[currentQuestion]}
                nextQuestion={nextQuestion} />
        )
    }
}

export default Quiz;