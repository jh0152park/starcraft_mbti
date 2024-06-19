"use client";

interface ILinkButton {
    title: string;
    path: string;
}

export default function LinkButton({ title, path }: ILinkButton) {
    return (
        <div className=" px-20 py-2 rounded-md bg-black hover:cursor-pointer bg-opacity-50 *:transition-all border-[1.5px] border-red-500 hover:bg-opacity-70 *:hover:text-[#b9ff73]">
            <span className="font-semibold text-md text-[#57c62e]">
                {title}
            </span>
        </div>
    );
}
