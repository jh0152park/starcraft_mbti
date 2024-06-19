import LinkButton from "@/components/button/link-button";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2600px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/intro_background.png"
                    alt="Intro-Background-Image"
                    className="-z-10"
                />

                <Image
                    src="/resource/images/logo/logo.png"
                    alt="Logo"
                    width="500"
                    height="100"
                    className="absolute top-1/4"
                />

                <div className="flex flex-col items-center justify-center gap-5">
                    <span className="font-bold text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        Starcraft MBTI 테스트
                    </span>
                    <span className="font-semibold text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        나와 같은 MBTI를 가진 스타크래프트 유닛은?
                    </span>
                </div>

                <div className="absolute  top-3/4">
                    <LinkButton title="Start" path="/questions/1" />
                </div>
            </div>
        </div>
    );
}
