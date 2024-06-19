import { IProgressBar } from "./progress-bar";

interface IQuestionBoard {
    step: IProgressBar;
    question: string;
}

export default function QuestionBoard({ step, question }: IQuestionBoard) {}
