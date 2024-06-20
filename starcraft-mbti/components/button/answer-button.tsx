"use client";

import { mbtiAnswerState } from "@/global/project-common";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

interface IAnswerButton {
    step: number;
    type: string;
    title: string;
}

export default function AnswerButton({ step, type, title }: IAnswerButton) {
    const router = useRouter();
    const [MBTIAnswer, setMBTIAnswer] = useRecoilState(mbtiAnswerState);

    function onClick() {
        setMBTIAnswer(MBTIAnswer + type);

        if (step < 20) {
            router.push(`/questions/${step + 1}`);
        } else {
            // compute mbti result first
            // then move to each mbti result page
        }
    }

    return (
        <div
            onClick={onClick}
            className=" relative w-[50%] py-2 rounded-md bg-black hover:cursor-pointer bg-opacity-50 *:transition-all border-[1.5px] border-red-500 hover:bg-opacity-80 *:hover:text-[#b9ff73] text-center"
        >
            <span className="font-semibold text-md text-[#57c62e]">
                {title}
            </span>
        </div>
    );
}
