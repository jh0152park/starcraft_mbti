import Image from "next/image";

interface IQuestionBoard {
    step: number;
    question: string;
    answer1: string;
    answer2: string;
}

export default function QuestionBoard({
    step,
    question,
    answer1,
    answer2,
}: IQuestionBoard) {
    return (
        <div className="w-[80%] max-w-[600px] h-[50%] bg-black bg-opacity-70 border-[3px] border-red-500 relative flex flex-col items-start justify-start p-7 *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            <Image
                src="/resource/images/accessories/media_border_top_left.png"
                alt="media_border_top_left"
                width="70"
                height="20"
                className="absolute -left-2 -top-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_top_right.png"
                alt="media_border_top_right"
                width="70"
                height="20"
                className="absolute -right-2 -top-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_bottom_left.png"
                alt="media_border_bottom_left"
                width="70"
                height="20"
                className="absolute -left-2 -bottom-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_bottom_right.png"
                alt="media_border_bottom_right"
                width="70"
                height="20"
                className="absolute -right-2 -bottom-3 "
            />

            <div className="flex flex-col *:font-semibold  ">
                <span className=" font-bold text-2xl md:text-3xl">
                    Q. {step}
                </span>
                <span className="my-5 text-xl md:text-2xl">{question}</span>
                <span className="text-lg md:text-xl mt-5 mb-3">
                    (1) {answer1}
                </span>
                <span className="text-lg md:text-xl">(2) {answer2}</span>
            </div>
        </div>
    );
}
