import { Globe, Layout, Gamepad2, Database, } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Webアプリ開発",
      icon: <Database className="w-10 h-10 text-blue-500" />,
      desc: "Next.jsやReactを使用した、高機能なWebアプリケーションを開発します。業務効率化ツールや会員制サイトなど、動的な仕組みを構築します。",
    },
    {
      title: "Unityゲーム開発",
      icon: <Gamepad2 className="w-10 h-10 text-blue-500" />,
      desc: "UnityとC#を用い、ブラウザゲーム（WebGL）からPC・モバイル向けゲームまで幅広く対応。遊び心のある演出やUI/UXの構築が得意です。",
    },
    {
      title: "Webサイト制作",
      icon: <Layout className="w-10 h-10 text-blue-500" />,
      desc: "コーポレートサイトから、個人のポートフォリオまで制作。SEO（検索エンジン最適化）やスマホ対応を徹底します。",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12 text-blue-400">Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500 transition-all group">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}