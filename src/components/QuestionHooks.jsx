import { useState, useEffect } from 'react';
import AnswerChoice from './AnswerChoiceHooks';

function Question(props) {
    const [time, setTime] = useState(10);

    useEffect(() => {
        setTime(10);
    }, [props.trivia]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        if (time > 0) {
            document.title = `${time}`;
        } else {
            clearInterval(timerId);
            document.title = "TIME'S UP! Hooks";
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