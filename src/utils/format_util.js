import { shuffleArray } from './shuffle_util';

export const formatQuestions = (data) => {
    let questions = data.results.map(result => {
        let question = result.question.replace(/&#039;/g, "'");
        question = question.replace(/&quot;/g, "'");
        question = question.replace(/&rsquo;/g, "'");

        let correct_answer = result.correct_answer.replace(/&#039;/g, "'");
        correct_answer = correct_answer.replace(/&quot;/g, "'");
        correct_answer = correct_answer.replace(/&rsquo;/g, "'");

        let incorrect_answers = result.incorrect_answers.map(answer => {
            let formattedAnswer = answer.replace(/&#039;/g, "'");
            formattedAnswer = formattedAnswer.replace(/&quot;/g, "'");
            formattedAnswer = formattedAnswer.replace(/&rsquo;/g, "'");
            return formattedAnswer;
        })

        return {
            question,
            answers: [correct_answer, ...incorrect_answers]
        };
    });

    return shuffleArray(questions);
}