import React from 'react';
import AnswerChoice from './AnswerChoice';

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 10
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((state) => {
                return {time: state.time - 1};
            });
        }, 1000);

        document.title = `${this.state.time}`;
    }

    componentDidUpdate(prevProps) {
        if (this.state.time > 0) {
            document.title = `${this.state.time}`
        } else {
            clearInterval(this.timerId);
            document.title = "TIME'S UP!"
        };

        if (prevProps.trivia !== this.props.trivia) {
            this.setState({time: 10});

            clearInterval(this.timerId);
            this.timerId = setInterval(() => {
                this.setState((state) => {
                    return { time: state.time - 1 };
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