import { styleCombine } from "@/utils/style/style-combine";

type TProgress =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20;

interface IProgressBar {
    step: TProgress;
}

export default function ProgressBar({ step }: IProgressBar) {
    return (
        <div className=" w-[600px] h-[10px] rounded-lg bg-[#57c62e] relative ">
            <div
                className={styleCombine([
                    "absolute top-0 left-0 h-full rounded-lg bg-[#b9ff73]",
                    `w-[${step * 30}px]`,
                ])}
            ></div>
        </div>
    );
}
