import LinkButton from "@/components/button/link-button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className=" max-w-[2000px] w-full h-screen relative flex flex-col items-center justify-center ">
                <Image
                    fill
                    src="/resource/images/background/not_found_background.png"
                    alt="Notfound-Background-Image"
                    className="-z-10"
                    quality={75}
                />

                <div className="flex flex-col items-center justify-center *:font-bold *:sm:text-4xl *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-xl text-center gap-10">
                    <span>Commander, something seems to be broken.</span>
                    <span>We must pull back!</span>
                </div>

                <div className="absolute top-3/4">
                    <LinkButton title="Pull Back" path="/" />
                </div>
            </div>
        </div>
    );
}
