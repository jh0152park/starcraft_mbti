import { NAME_OF_MBTI } from "@/global/results";

export default function ResultTitle({ mbti }: { mbti: string }) {
    const name = NAME_OF_MBTI[mbti];
    return (
        <div className=" w-full h-[15%] flex flex-col items-center justify-center *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] gap-2">
            <span className="font-bold text-5xl">{mbti}</span>
            <span className="font-semibold text-lg">{name}</span>
        </div>
    );
}
