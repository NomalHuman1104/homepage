import Link from "next/link";
import { Gamepad2, BookText, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center">
      {/* ヒーローセクション / 経営理念 */}
      <section className="w-full max-w-4xl px-6 py-24 md:py-32 text-center">
        <h1 className="text-sm font-mono text-blue-500 mb-4 tracking-widest uppercase">Management Philosophy</h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          「問題の本質を理解し、解決する。<br className="hidden md:block" />
          わかりやすく伝える」
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          ゲーム制作とWeb開発を通じて、複雑な技術を価値ある形に変換し、<br className="hidden md:block" />
          お客様のビジョンを確実に具現化します。
        </p>
      </section>

      {/* 誘導セクション（ゲーム & ブログ） */}
      <section className="w-full max-w-5xl px-6 pb-24 grid md:grid-cols-2 gap-8">
        {/* ゲームへのリンクカード */}
        <Link href="/games" className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500 transition-all duration-300">
          <div className="mb-6 flex items-center justify-between">
            <div className="p-4 bg-blue-500/10 rounded-2xl">
              <Gamepad2 className="w-8 h-8 text-blue-500" />
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Games</h3>
          <p className="text-slate-400 leading-relaxed">
            UnityとC#を用いた自作ゲームを公開中。遊び心と技術の融合を体験してください。
          </p>
        </Link>

        {/* ブログへのリンクカード */}
        <Link href="/blog" className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500 transition-all duration-300">
          <div className="mb-6 flex items-center justify-between">
            <div className="p-4 bg-blue-500/10 rounded-2xl">
              <BookText className="w-8 h-8 text-blue-500" />
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-blue-500 transition-colors" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Blog</h3>
          <p className="text-slate-400 leading-relaxed">
            開発の裏側や技術的な学びを発信しています。最新の記事はこちらからご覧ください。
          </p>
        </Link>
      </section>

      {/* フッター代わりの導線 */}
      <div className="pb-24">
        <Link href="/contact" className="text-slate-500 hover:text-blue-400 transition-colors font-mono">
          Ready to start a project? → Contact Me
        </Link>
      </div>
    </main>
  );
}