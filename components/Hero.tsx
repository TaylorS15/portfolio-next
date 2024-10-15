import Link from 'next/link';

export default function Hero() {
	return (
		<div className="z-10 mx-[10vw] mt-48 flex flex-col gap-4 ">
			<p className="text-4xl text-white">Hello, I&apos;m</p>
			<h1 className="bg-gradient-to-r w-max from-blue-700 to-sky-500 bg-clip-text pb-3 text-7xl font-bold text-transparent">
				Taylor Svec
			</h1>
			<div className="flex gap-2">
				<p className="text-4xl font-bold text-white">A Web Developer</p>
				<p className="animate-hand-wave text-4xl">👋</p>
			</div>

			<div className="mt-8 flex gap-4">
				<Link
					className="h-12 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-2 text-lg font-medium text-white backdrop-blur-md transition-all hover:from-blue-700 hover:to-cyan-600"
					href="/contact">
					Connect
				</Link>
				<Link
					className="h-12 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-2 text-lg font-medium text-white backdrop-blur-md transition-all hover:from-blue-700 hover:to-cyan-600"
					href="/about">
					More About Me
				</Link>
			</div>
		</div>
	);
}
