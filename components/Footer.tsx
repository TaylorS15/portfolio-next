export default function Footer() {
  return (
    <div className="overflow-y-hidden border-t border-white/50 px-[10vw] py-4 backdrop-blur-md lg:px-[20vw]">
      <div className="flex gap-4">
        <h1 className="w-max text-3xl font-bold text-white">Taylor Svec</h1>
        <code className="my-auto rounded-md bg-slate-800 p-1 text-sm text-slate-100">
          v2.0.0
        </code>
      </div>
      <p className="text-lg text-white">
        Built with Next.js 14 and powered by Vercel 🚀
      </p>
    </div>
  );
}
