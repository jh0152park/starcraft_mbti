import { EXPLAIN_OF_MBTI } from "@/global/results";

export default function ResultExplain({ mbti }: { mbti: string }) {
    const explain = EXPLAIN_OF_MBTI[mbti];

    return (
        <div className=" mt-7 px-[3%] w-full text-left *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <span className=" text-[13px] sm:text-lg font-bold">{explain}</span>
        </div>
    );
}
