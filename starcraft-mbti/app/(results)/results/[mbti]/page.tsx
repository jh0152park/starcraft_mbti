import Image from "next/image";
import NotFound from "@/app/not-found";
import { MBTIs } from "@/global/results";
import ResultBoard from "@/components/results/result-board";

export const dynamicParams = true;

export default function MBTIResult({ params }: { params: { mbti: string } }) {
    const mbti = params.mbti.toUpperCase();

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
                    quality={75}
                />

                <ResultBoard mbti={mbti} />
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return Object.keys(MBTIs).map((mbti) => ({
        mbti: mbti,
    }));
}
