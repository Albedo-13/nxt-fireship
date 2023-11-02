import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const NotoSans = Noto_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>{children}</body>
    </html>
  );
}
