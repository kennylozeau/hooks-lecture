import React from 'react';
import AnswerChoice from './AnswerChoice';

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 10
        }
    }

    componentDidMount() {
        document.title = `${this.state.timer}`;
        this.timerId = setInterval(() => {
            this.setState((state) => {
                return {timer: state.timer - 1};
            });
        }, 1000);
    }

    componentDidUpdate(prevProps) {
        console.log(this.state.timer);
        if (this.state.timer > 0) {
            document.title = `${this.state.timer}`
        } else {
            clearInterval(this.timerId);
            document.title = "TIME'S UP!"
        };

        if (prevProps.trivia !== this.props.trivia) {
            this.setState({timer: 10});

            clearInterval(this.timerId);
            this.timerId = setInterval(() => {
                this.setState((state) => {
                    return { timer: state.timer - 1 };
                });
            }, 1000);
        };
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        let answers = this.props.trivia.answers.map((answer, idx) => (
                <AnswerChoice
                    key={idx + Math.random()}
                    answer={answer}
                    nextQuestion={this.props.nextQuestion}
                    correct={idx === 0 ? true : false} />
            ));

        return (
            <div className="question">
                <h1>{this.props.trivia.question}</h1>
                {answers}
            </div>
        )
    }
}

export default Question;