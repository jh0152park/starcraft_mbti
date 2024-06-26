import Image from "next/image";
import ResultTitle from "./result-title";
import ResultPhoto from "./result-photo";
import ResultExplain from "./result-explain";
import ResultCombination from "./result-combination";
import ResultHomeButton from "../button/result-home-button";
import ResultShareutton from "../button/result-share-button";

export default function ResultBoard({ mbti }: { mbti: string }) {
    return (
        <div className="w-[80%] max-w-[600px] h-[80%] bg-black bg-opacity-70 border-[3px] border-red-500 relative flex flex-col items-start justify-start  *:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] *:select-none ">
            <Image
                src="/resource/images/accessories/media_border_top_left.png"
                alt="media_border_top_left"
                width="70"
                height="20"
                className="absolute -left-2 -top-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_top_right.png"
                alt="media_border_top_right"
                width="70"
                height="20"
                className="absolute -right-2 -top-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_bottom_left.png"
                alt="media_border_bottom_left"
                width="70"
                height="20"
                className="absolute -left-2 -bottom-3 "
            />

            <Image
                src="/resource/images/accessories/media_border_bottom_right.png"
                alt="media_border_bottom_right"
                width="70"
                height="20"
                className="absolute -right-2 -bottom-3 "
            />

            <ResultTitle mbti={mbti} />

            <ResultPhoto mbti={mbti} />

            <ResultExplain mbti={mbti} />

            <ResultCombination mbti={mbti} />

            <div className="w-full flex items-center justify-center gap-2 px-3 absolute bottom-3">
                <ResultHomeButton />
                <ResultShareutton />
            </div>
        </div>
    );
}
