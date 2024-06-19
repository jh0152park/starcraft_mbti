"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ILinkButton {
    title: string;
    path: string;
}

export default function LinkButton({ title, path }: ILinkButton) {
    const router = useRouter();

    function onButtonClick() {
        router.push(path);
    }

    return (
        <div
            onClick={onButtonClick}
            className=" relative px-20 py-2 rounded-md bg-black hover:cursor-pointer bg-opacity-50 *:transition-all border-[1.5px] border-red-500 hover:bg-opacity-80 *:hover:text-[#b9ff73]"
        >
            <span className="font-semibold text-md text-[#57c62e]">
                {title}
            </span>

            {/* <Image
                src="/resource/images/accessories/media_border_top_left.png"
                alt="media_border_top_left"
                width="25"
                height="20"
                className="absolute -left-1 -top-1 "
            />

            <Image
                src="/resource/images/accessories/media_border_top_right.png"
                alt="media_border_top_right"
                width="25"
                height="20"
                className="absolute -right-1 -top-1 "
            />

            <Image
                src="/resource/images/accessories/media_border_bottom_right.png"
                alt="media_border_bottom_right"
                width="25"
                height="20"
                className="absolute -right-1 -bottom-1 "
            /> */}
        </div>
    );
}
