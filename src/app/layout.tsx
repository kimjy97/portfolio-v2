import type { Metadata } from "next";
import "@styles/globals.scss"
import StyledComponentsRegistry from "@libs/registry";
import Header from "@components/Header";
import { poppins, pretendard } from "@public/fonts";
import RecoilRootWrapper from "@/components/Recoil/RecoilRootWrapper";
import ScrollProgressBar from "@components/ScrollBar";
import Modals from "@/components/Modals";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "JongYeon's PORTFOLIO",
  description: "안녕하세요. 프론트엔드 개발자 김종연 입니다. 해당 웹사이트는 저의 기술과 프로젝트를 소개하기 위한 포트폴리오 웹사이트입니다.",
  icons: {
    icon: [
      { rel: 'icon', type: 'image/png', url: '/meta/fav.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${poppins.variable} ${pretendard.variable}`}>
        <RecoilRootWrapper>
          <StyledComponentsRegistry>
            <Suspense>
              {children}
              <Header />
              <ScrollProgressBar />
              <Modals />
            </Suspense>
          </StyledComponentsRegistry>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
