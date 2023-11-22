import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import Sidenav from "./ui/layout/Sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "무한도전 저장소",
    default: "무한도전 저장소",
  },
  description: "우리가 사랑한 무한도전 정보를 모아둔 저장소 사이트입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <Sidenav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
