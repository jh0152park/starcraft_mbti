"use client";

import { RecoilRoot } from "recoil";

interface IRecoilWrapper {
    children: React.ReactNode;
}

export default function RecoilWrapper({ children }: IRecoilWrapper) {
    return <RecoilRoot>{children}</RecoilRoot>;
}
