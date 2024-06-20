import Image from "next/image";
import NotFound from "@/app/not-found";
import { MBTIs } from "@/global/results";

export default function MBTIResult({ params }: { params: { mbti: string } }) {
    const mbti = params.mbti.toUpperCase() as any;

    if (!Object.keys(MBTIs).includes(mbti)) {
        return <NotFound />;
    }

    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2600px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/outro_background.png"
                    alt="Outro-Background-Image"
                    className="-z-10"
                />
            </div>
        </div>
    );
}

/*

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
        
*/
