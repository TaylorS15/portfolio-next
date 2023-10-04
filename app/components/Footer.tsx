export default function Footer() {
	return (
		<div className="relative z-10 overflow-y-hidden border-t border-slate-700 px-[10vw] py-4 backdrop-blur-md md:px-[20vw] lg:px-[27vw]">
			<div className="flex gap-4">
				<h1 className="w-max text-3xl font-bold text-app-black-2">Taylor Svec</h1>
				<code className="my-auto rounded-md bg-slate-800 p-1 text-sm text-slate-100">
					v1.5.0
				</code>
			</div>
			<p className="text-lg text-app-black-2">
				Built with NextJS 13 and powered by Vercel 🚀
			</p>
		</div>
	);
}
