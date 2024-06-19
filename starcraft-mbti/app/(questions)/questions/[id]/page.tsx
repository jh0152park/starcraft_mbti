import NotFound from "@/app/not-found";
import ProgressBar from "@/components/questions/progress-bar";
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

                <ProgressBar step={+questionId} />
            </div>
        </div>
    );
}
