import { Mail, Github, Twitter, Gamepad2, Globe } from "lucide-react"; // アイコン用

export default function Contact() {
  const contacts = [
    {
      name: "X (Twitter)",
      id: "@Yoruje", // ご自身のアカウント名に書き換えてください
      link: "https://x.com/Yoruje",
      icon: <Twitter className="w-6 h-6" />,
      color: "hover:border-sky-400 hover:text-sky-400",
    },
    {
      name: "unityroom",
      id: "よるじぇ",
      link: "https://unityroom.com/users/yp5fus0th37ler2j8w6o",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "hover:border-green-400 hover:text-green-400",
    },
    {
      name: "GitHub",
      id: "y-onuma", // GitHubをお持ちであれば
      link: "https://github.com/",
      icon: <Github className="w-6 h-6" />,
      color: "hover:border-white hover:text-white",
    },
    {
      name: "Email",
      id: "お仕事の依頼はこちら",
      link: "mailto:yunosuke1207@icloud.com", // ご自身のメールアドレスに
      icon: <Mail className="w-6 h-6" />,
      color: "hover:border-blue-500 hover:text-blue-500",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">Get In Touch</h1>
      <p className="text-slate-400 mb-12">
        ゲーム開発やWeb制作のご相談、またはお仕事の依頼など、<br className="hidden md:block" />
        各プラットフォームよりお気軽にご連絡ください。
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-6 bg-slate-800/40 border border-slate-700 rounded-2xl transition-all duration-300 ${c.color} group`}
          >
            <div className="mr-6 p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
              {c.icon}
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-500 font-mono">{c.name}</div>
              <div className="text-lg font-bold">{c.id}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 p-8 border border-dashed border-slate-700 rounded-3xl">
        <p className="text-slate-500 text-sm">
          ※基本的には24時間以内に返信いたします。
        </p>
      </div>
    </main>
  );
}