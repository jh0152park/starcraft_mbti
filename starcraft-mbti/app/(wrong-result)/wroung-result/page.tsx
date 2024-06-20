import LinkButton from "@/components/button/link-button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2000px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/terran_background.png"
                    alt="Terran-Background-Image"
                    className="-z-10"
                />

                <div className="flex flex-col items-center justify-center *:font-bold *:sm:text-4xl *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-xl text-center gap-10">
                    <span>
                        Private maggot. You didn't answer fo all questions.
                    </span>
                    <span>Do it again from the beginning!!</span>
                </div>

                <div className="absolute top-3/4">
                    <LinkButton title="Back to beginning" path="/" />
                </div>
            </div>
        </div>
    );
}
