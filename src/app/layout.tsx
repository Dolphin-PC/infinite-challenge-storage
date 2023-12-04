import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./components/globals.css";
import Sidenav from "./components/layout/Sidenav";
import {
  getInitialColorMode,
  setColorMode,
  setInitialColorMode,
} from "./lib/util";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "./providers";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "무한도전 저장소",
    default: "무한도전 저장소",
  },
  description: "우리가 사랑한 무한도전 정보를 모아둔 저장소 사이트입니다.",
};

export const ScriptTag = () => {
  const codeToRunOnClient = `(function() {
    ${getInitialColorMode.toString()}
    ${setInitialColorMode.toString()}
    ${setColorMode.toString()}
    setInitialColorMode();
  })()`;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ScriptTag />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <Sidenav />
          </div>
          <div
            id="layout"
            className="flex-grow dark:bg-primary md:overflow-scroll "
          >
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
