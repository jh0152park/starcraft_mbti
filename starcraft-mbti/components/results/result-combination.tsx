import { COMBINATION_OF_MBTI, MBTIs } from "@/global/results";
import Image from "next/image";

export default function ResultCombination({ mbti }: { mbti: string }) {
    const combination = COMBINATION_OF_MBTI[mbti];
    const best = MBTIs[combination.best][0];
    const worst = MBTIs[combination.worst][0];

    return (
        <div className="w-full flex items-center justify-center gap-5 *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-7">
            <div className="flex flex-col items-center justify-center gap-2 ">
                <span className="font-bold test-[15px] sm:text-xl">
                    잘 맞는 궁합
                </span>
                <div className=" size-20 sm:size-28 md:size-32 aspect-square relative rounded-full overflow-hidden">
                    <Image
                        fill
                        src={`/resource/images/characters/${best}.png`}
                        alt={best}
                        className="object-cover rounded-full"
                        quality={10}
                        priority={true}
                    />
                </div>
                <span className="font-bold text-[13px] sm:text-lg">
                    {combination.best}
                </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 ">
                <span className="font-bold test-[15px] sm:text-xl">
                    잘 안맞는 궁합
                </span>
                <div className=" size-20 sm:size-28 md:size-32 aspect-square relative rounded-full overflow-hidden">
                    <Image
                        fill
                        src={`/resource/images/characters/${worst}.png`}
                        alt={worst}
                        className="object-cover rounded-full"
                        quality={10}
                        priority={true}
                    />
                </div>
                <span className="font-bold text-[13px] sm:text-lg">
                    {combination.worst}
                </span>
            </div>
        </div>
    );
}
