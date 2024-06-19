import { atom } from "recoil";

interface IMBTIAnswer {
    answerCount: number;
    E: number;
    I: number;
    S: number;
    N: number;
    F: number;
    T: number;
    J: number;
    P: number;
}
export const mbtiAnswerState = atom<IMBTIAnswer>({
    key: "mbtiAnswerState",
    default: {
        answerCount: 0,
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        F: 0,
        T: 0,
        J: 0,
        P: 0,
    },
});
