import Link from "next/link";
import { client } from "../../libs/client";

export default async function BlogIndex() {
  const data = await client.get({ endpoint: "blog" });
  const posts = data.contents;

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Technical Blog
      </h1>
      <div className="grid gap-6">
        {posts.map((post: any) => (
          <article key={post.id} className="group relative bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all shadow-xl">
            <Link href={`/blog/${post.id}`} className="block">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-slate-400 font-mono">
                  {post.date?.split("T")[0]}
                </time>
              </div>
              <p className="text-slate-400 line-clamp-2 mb-4">
                {/* 記事の概要などがあればここに */}
                エンジニアリングに関する知見を共有します。
              </p>
              <div className="text-blue-400 text-sm font-bold flex items-center">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
//microCMSの内容をここに持ってきている