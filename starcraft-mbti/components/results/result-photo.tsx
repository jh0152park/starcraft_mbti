import { MBTIs } from "@/global/results";
import Image from "next/image";

export default function ResultPhoto({ mbti }: { mbti: string }) {
    const characters = MBTIs[mbti];

    return (
        <div className="w-full flex items-center justify-center gap-5 *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            {characters.map((char) => (
                <div
                    key={char}
                    className="flex flex-col items-center justify-center gap-2 "
                >
                    <div className=" size-36 aspect-square relative rounded-full overflow-hidden">
                        <Image
                            fill
                            src={`/resource/images/characters/${char}.png`}
                            alt={char}
                            className="object-cover"
                        />
                    </div>
                    <span className="font-bold">{char}</span>
                </div>
            ))}
        </div>
    );
}
