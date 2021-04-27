function AnswerChoice(props) {

    function handleClick() {
        const body = document.body;
        body.className = props.correct ? "correct" : "incorrect";

        setTimeout(() => {
            body.className = "";
            props.nextQuestion();
        }, 2000);
    }

    return (
        <div
            className={'answer-choice'}
            onClick={() => handleClick()}>
            <p>{props.answer}</p>
        </div>
    )
}

export default AnswerChoice;