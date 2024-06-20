"use client";

import { useRouter } from "next/navigation";

export default function ResultHomeButton() {
    const router = useRouter();

    function onClick() {
        router.push("/");
    }

    return (
        <div
            onClick={onClick}
            className=" w-full py-2 flex justify-center items-center rounded-md bg-black hover:cursor-pointer bg-opacity-50 *:transition-all border-[1.5px] border-red-500 hover:bg-opacity-80 *:hover:text-[#b9ff73]"
        >
            <span className="font-semibold text-md text-[#57c62e]">Home</span>
        </div>
    );
}
