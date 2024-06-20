"use client";

export default function ResultShareutton() {
    async function onClick(url: string) {
        try {
            await navigator.clipboard.writeText(url);
            alert("URL copied success!");
        } catch (e) {
            alert("Please try again later");
        }
    }

    return (
        <div
            onClick={() => onClick(window.location.href)}
            className=" w-full py-2 flex justify-center items-center rounded-md bg-black hover:cursor-pointer bg-opacity-20 *:transition-all border-[1.5px] border-red-500 hover:bg-opacity-70 *:hover:text-[#b9ff73]"
        >
            <span className="font-semibold text-md text-[#57c62e]">Share</span>
        </div>
    );
}
