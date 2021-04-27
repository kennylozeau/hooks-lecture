import { useState, useEffect } from 'react';
import AnswerChoice from './AnswerChoiceHooks';

function Question(props) {

    const [timer, setTimer] = useState(10);

    useEffect(() => {
        setTimer(10);
    }, [props.trivia]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000);

        console.log(timer);
        if (timer > 0) {
            document.title = `${timer}`
        } else {
            clearInterval(timerId);
            document.title = "TIME'S UP! Hooks"
        };

        return () => clearInterval(timerId);
    });

    let answers = props.trivia.answers.map((answer, idx) => (
        <AnswerChoice
            key={idx + Math.random()}
            answer={answer}
            nextQuestion={props.nextQuestion}
            correct={idx === 0 ? true : false} />
    ));

    return (
        <div className="question">
            <h1>{props.trivia.question}</h1>
            {answers}
        </div>
    )
}

export default Question;