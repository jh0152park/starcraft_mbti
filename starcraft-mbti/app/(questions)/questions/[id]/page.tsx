import NotFound from "@/app/not-found";
import AnswerButton from "@/components/button/answer-button";
import ProgressBar from "@/components/questions/progress-bar";
import QuestionBoard from "@/components/questions/question-board";
import Image from "next/image";

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

    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2600px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/question_background.png"
                    alt="Question-Background-Image"
                    className="-z-10"
                />

                <Image
                    src="/resource/images/logo/logo.png"
                    alt="Logo"
                    width="350"
                    height="100"
                    className="absolute top-[5%]"
                />

                <ProgressBar step={+questionId} />

                <QuestionBoard step={+questionId} question="벌컨 쌉가능?" />

                <div className="w-[80%] max-w-[600px] flex items-start justify-between gap-5 mt-5">
                    <AnswerButton step={+questionId} title="(1)" type="T" />
                    <AnswerButton step={+questionId} title="(2)" type="F" />
                </div>
            </div>
        </div>
    );
}
