import Image from "next/image";

interface IQuestionBoard {
    step: number;
    question: string;
}

export default function QuestionBoard({ step, question }: IQuestionBoard) {
    return (
        <div className="w-[80%] max-w-[600px] h-[30%] bg-black bg-opacity-70 border-[3px] border-red-500 relative flex flex-col items-start justify-start p-7 *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
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

            <span className=" font-bold text-2xl md:text-3xl mb-5">
                Q. {step}
            </span>
            <span className=" font-semibold text-xl md:text-2xl">
                {question}
            </span>
        </div>
    );
}
