export class QuizzItem{

    question: string;
    answer: string;
    hideAnswer: boolean;

    constructor(question, solution, hideAnswer) {
        this.question = question;
        this.answer = solution;
        this.hideAnswer = hideAnswer;
        }

}