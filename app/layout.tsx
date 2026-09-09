import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dctherapy.netlify.app"),
  title: {
    default: "대청테라피 | 대전·청주 출장마사지 24시 방문 홈케어",
    template: "%s | 대청테라피",
  },
  description:
    "대전 및 청주 전 지역 24시 출장마사지 전문 대청테라피. 유성·서구·흥덕·청원 30분 내 방문, 건식·아로마·스웨디시 100% 후불제 케어.",
  keywords: [
    "대전출장마사지",
    "청주출장마사지",
    "대청테라피",
    "대전홈타이",
    "청주홈타이",
    "대전스웨디시",
    "청주스웨디시",
  ],
  alternates: {
    canonical: "https://dctherapy.netlify.app",
  },
  openGraph: {
    title: "대청테라피 | 대전·청주 출장마사지 24시 방문 홈케어",
    description:
      "대전 및 청주 전 지역 30분 내 빠른 방문, 전 코스 100% 후불제 안심 테라피.",
    url: "https://dctherapy.netlify.app",
    siteName: "대청테라피",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "20aed14af388a01bf5aad0deed962a7162ae1be3",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}