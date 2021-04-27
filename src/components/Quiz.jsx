import React from 'react';
import { formatQuestions } from '../utils/fetch_util';
import Question from './Question';

class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trivia: [],
            currentQuestion: 0
        };

        this.nextQuestion = this.nextQuestion.bind(this);
    }

    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=5&category=27&type=multiple')
            .then(response => response.json())
            .then(data => {
                let questions = formatQuestions(data);
                this.setState({ trivia: questions });
            });
    }

    nextQuestion() {
        let nextQuestion = this.state.currentQuestion + 1;
        this.setState({ currentQuestion: nextQuestion });
    }

    render() {
        if (this.state.trivia.length === 0) {
            return <h1>Loading Questions</h1>
        } else {
            return (
                <Question
                    trivia={this.state.trivia[this.state.currentQuestion]}
                    nextQuestion={this.nextQuestion} />
            )
        }
    }
}

export default Quiz;