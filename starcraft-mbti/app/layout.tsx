import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import RecoilWrapper from "@/components/recoil/recoil-wrapper";

const inter = Inter({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Starcraft Unit MBTI",
    description: "Guess who has same MBTI as me!!?",
    icons: {
        icon: "/resource/images/logo/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={open_sans.className}>
                <RecoilWrapper>{children}</RecoilWrapper>
            </body>
        </html>
    );
}
