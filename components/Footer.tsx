export default function Footer() {
	return (
		<div className="relative z-10 overflow-y-hidden border-t border-slate-700 px-[10vw] py-4 backdrop-blur-md ">
			<div className="flex gap-4">
				<h1 className="w-max text-3xl font-bold text-white">Taylor Svec</h1>
				<code className="my-auto rounded-md bg-slate-800 p-1 text-sm text-slate-100">
					v1.9.2
				</code>
			</div>
			<p className="text-lg text-white">
				Built with Next.js 14 and powered by Vercel 🚀
			</p>
		</div>
	);
}
