import { atom } from "recoil";

export const mbtiAnswerState = atom<string>({
    key: "mbtiAnswerState",
    default: "",
});
