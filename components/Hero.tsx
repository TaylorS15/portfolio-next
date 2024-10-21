import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl text-white">Hello, I&apos;m</p>
      <h1 className="w-max bg-gradient-to-tr from-cyan-500 from-5% via-purple-600 to-cyan-500 to-95% bg-clip-text pb-3 text-7xl font-bold text-transparent">
        Taylor Svec
      </h1>
      <div className="flex gap-2">
        <p className="text-4xl font-bold text-white">A Web Developer</p>
        <p className="animate-hand-wave text-4xl">👋</p>
      </div>

      <div className="mt-4 flex gap-4">
        <Link
          className="flex h-10 items-center justify-center rounded-md border border-white/50  px-3 text-lg font-medium text-white backdrop-blur-md hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600  hover:to-cyan-500 hover:to-95%"
          href="/contact">
          Connect
        </Link>
        <Link
          className="flex h-10 items-center justify-center rounded-md border border-white/50 px-3 text-lg font-medium text-white backdrop-blur-md hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600  hover:to-cyan-500 hover:to-95%"
          href="/about">
          More About Me
        </Link>
      </div>
    </div>
  );
}
