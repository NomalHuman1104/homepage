// app/games/page.tsx
import Image from "next/image";

export default function Games() {
  const games = [
    {
      title: "よるじぇ作品集(unityroom)",
      tech: "Unity / C#",
      desc: "自作の2dゲーム。",
      link: "https://unityroom.com/users/yp5fus0th37ler2j8w6o",
      image: "/xicon.png",
    },
    { title: "arrowadventure", 
      tech: "Unity / WebGL",
       desc: "2dのトップビューゲーム。好きな攻略法でクリアしましょう!", 
       link: "https://unityroom.com/games/arrowadventure",
       image:"/arrowadventure.png",
    },
  ];

return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12 text-blue-400">Games</h1>
      
      {/* グリッドレイアウト（2カラム） */}
      <div className="grid md:grid-cols-2 gap-8">
        {games.map((g, i) => (
          <a 
            key={i} 
            href={g.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all"
          >
            {/* ゲーム画像エリア */}
            <div className="aspect-video relative overflow-hidden bg-slate-800">
              {g.image ? (
                <Image 
                  src={g.image} 
                  alt={g.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-500">No Image</div>
              )}
            </div>

            {/* テキストエリア */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{g.title}</h2>
              <p className="text-xs text-blue-500 font-mono mb-4 uppercase tracking-wider">{g.tech}</p>
              <p className="text-slate-400 leading-relaxed mb-4">{g.desc}</p>
              <div className="text-sm font-bold text-blue-400">Play Now →</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}