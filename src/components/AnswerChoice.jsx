import React from 'react';

class AnswerChoice extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const body = document.body;
        body.className = this.props.correct ? "correct" : "incorrect";

        setTimeout(() => {
            body.className = "";
            this.props.nextQuestion();
        }, 2000);
    }

    render() {
        return (
            <div
              className={'answer-choice'}
                onClick={this.handleClick}>
                <p>{this.props.answer}</p>
            </div>
        )
    }
}

export default AnswerChoice;