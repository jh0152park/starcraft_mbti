"use client";

import { mbtiAnswerState } from "@/global/project-common";
import { ComputeMBTI } from "@/utils/mbti/compute-mbti";
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
            // Aint completed all mbti questions
            // Must replace to some special page
            if ((MBTIAnswer + type).length < 20) {
                router.replace("/wroung-result");
            }
            // Completed all mbti questions
            // Have to compute MBTI result first
            // Then replace to each result page
            else {
                const mbti = ComputeMBTI(MBTIAnswer + type);
                router.replace(`results/${mbti}`);
            }
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
