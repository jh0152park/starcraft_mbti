import NotFound from "@/app/not-found";
import AnswerButton from "@/components/button/answer-button";
import ProgressBar from "@/components/questions/progress-bar";
import QuestionBoard from "@/components/questions/question-board";
import { MBTI_QUESTIONS } from "@/global/questions";
import Image from "next/image";

export const dynamicParams = true;

function isValidId(id: string) {
    let validIds = [];

    for (let i = 1; i <= 20; i++) {
        validIds.push(i + "");
    }

    return validIds.includes(id);
}

export default function Question({ params }: { params: { id: string } }) {
    const questionId = params.id;

    if (!isValidId(questionId)) {
        return <NotFound />;
    }

    const mbtiQuestion = MBTI_QUESTIONS[+questionId];

    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2600px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/question_background.png"
                    alt="Question-Background-Image"
                    className="-z-10"
                    quality={30}
                    priority={true}
                />

                <Image
                    src="/resource/images/logo/logo.png"
                    alt="Logo"
                    width="350"
                    height="100"
                    className="absolute top-[5%]"
                    quality={30}
                    priority={true}
                />

                <div className="w-full h-full flex flex-col items-center justify-center gap-5 mt-14">
                    <ProgressBar step={+questionId} />
                    <QuestionBoard
                        step={+questionId}
                        question={mbtiQuestion.question}
                        answer1={mbtiQuestion.answer1.answer}
                        answer2={mbtiQuestion.answer2.answer}
                    />
                    <div className="w-[80%] max-w-[600px] flex items-start justify-between gap-5 mt-5">
                        <AnswerButton
                            step={+questionId}
                            title="(1)"
                            type={mbtiQuestion.answer1.type}
                        />
                        <AnswerButton
                            step={+questionId}
                            title="(2)"
                            type={mbtiQuestion.answer2.type}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    let questions = [];

    for (let question = 1; question <= 20; question++) {
        questions.push(question);
    }

    return questions.map((question) => ({
        id: question + "",
    }));
}
