export interface IProgressBar {
    step: number;
}

export default function ProgressBar({ step }: IProgressBar) {
    return (
        <div className=" w-[80%] max-w-[600px] h-[10px] rounded-lg bg-[#57c62e] flex justify-start items-center overflow-hidden ">
            {[...new Array(step)].map((_, i) => (
                <div key={i} className="w-[5%] h-full bg-[#b0ff73] "></div>
            ))}
        </div>
    );
}
