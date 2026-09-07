import type { Metadata } from "next";
import "@styles/globals.scss"
import StyledComponentsRegistry from "@libs/registry";
import Header from "@components/Header";
import { poppins, pretendard } from "@public/fonts";
import RecoilRootWrapper from "@/components/Recoil/RecoilRootWrapper";
import ScrollProgressBar from "@components/ScrollBar";
import Modals from "@/components/Modals";
import { Suspense } from "react";

import { PROFILE } from "@/constants/profile";

export const metadata: Metadata = {
  openGraph: {
    title: PROFILE.meta.title,
    images: [{ url: '/meta/fav.png' }],
    type: 'website',
    siteName: PROFILE.meta.siteName,
    description: PROFILE.meta.description,
    url: process.env.NEXT_PUBLIC_VERCEL_URL || 'https://kimjy-portfolio.vercel.app'
  },
  title: PROFILE.meta.title,
  description: PROFILE.meta.description,
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
      <head>
        <meta name="google-site-verification" content="a2fgyHnx6CNoDmHMVOuzQTV4DQqn7a-WQkMF8YNLXvw" />
      </head>
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
