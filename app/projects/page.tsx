import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      title: "ライクル商事 公式サイト", 
      tech: "Web制作 / デザイン", 
      desc: "ライクル商事様のコーポレートサイトを制作。信頼感のあるデザインと、スマートフォン対応（レスポンシブ）を重視しました。",
      link: "https://www.raikurusyouzi.com/home.html",
      image: "/raikuru.png"
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12 text-blue-400">Projects</h1>
      <div className="space-y-8">
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row gap-8 p-8 bg-slate-800/30 border border-slate-800 rounded-3xl hover:bg-slate-800/50 hover:border-blue-500 transition-all block group">
            
            <div className="w-full md:w-80 h-48 relative overflow-hidden rounded-xl bg-slate-700">
              {/* 画像が存在する場合のみ表示、ない場合は背景色のみ */}
              {p.image ? (
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-500">No Image</div>
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{p.title}</h2>
              <p className="text-sm text-blue-400 font-mono mb-6">{p.tech}</p>
              <p className="text-slate-300 text-lg leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 text-sm text-blue-500 font-bold">サイトを見る →</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}