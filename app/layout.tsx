import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// linkをimport
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "大沼優之介 | ゲーム・Webアプリ受託開発",
  description: "ゲーム開発(Unity/C#)からモダンなWebアプリケーション開発まで。技術と誠実さでお客様のアイデアを形にします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*ナビゲーションメニュー: ServicesとProjectsを追加*/}
        <nav className="flex justify-center gap-8 py-6 border-b border-slate-800">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/games" className="hover:text-blue-400 transition-colors">Games</Link> 
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        {children}

        <footer className="py-10 text-center border-t border-slate-800 mt-20">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} 大沼優之介 (よるじぇ) . All rights reserved.
          </p>
        </footer>
        
      </body>
    </html>
  );
}
