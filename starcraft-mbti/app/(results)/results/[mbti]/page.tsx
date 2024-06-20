import Image from "next/image";
import NotFound from "@/app/not-found";
import { MBTIs } from "@/global/results";

export default function MBTIResult({ params }: { params: { mbti: string } }) {
    const mbti = params.mbti.toUpperCase() as any;

    if (!Object.keys(MBTIs).includes(mbti)) {
        return <NotFound />;
    }

    return (
        <>
            {Object.keys(MBTIs).includes(mbti) && (
                <div className="flex">
                    {MBTIs[mbti].map((char) => (
                        <Image
                            key={char}
                            src={`/resource/images/characters/${char}.png`}
                            alt={char}
                            width={200}
                            height={100}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
