import { client } from "../../../libs/client";

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await client.get({ endpoint: "blog", contentId: id });

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* 戻るリンク */}
      <Link href="/blog" className="text-slate-400 hover:text-blue-400 text-sm mb-8 inline-block transition-colors">
        ← Back to List
      </Link>

      <header className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-slate-50">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
          <span>Published: {post.date?.split("T")[0]}</span>
          <span className="bg-slate-700 px-2 py-1 rounded text-blue-300">#Tech</span>
        </div>
      </header>

      {/* 本文のスタイリング */}
      <div
        className="prose prose-invert prose-blue max-w-none 
                   [&>p]:text-slate-300 [&>p]:leading-loose [&>p]:mb-8
                   [&>h2]:text-2xl [&>h2]:text-blue-400 [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:font-bold
                   [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-2
                   [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8 [&>ul]:text-slate-300
                   [&>img]:rounded-2xl [&>img]:my-12 [&>img]:shadow-2xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

// Linkを使いたいので上に追加してください
import Link from "next/link";