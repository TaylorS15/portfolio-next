import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex h-14 w-full items-center justify-center gap-8 border-b border-white/50 backdrop-blur-md md:gap-12">
      <Link
        href="/"
        className="text-xl text-white transition-all hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600 hover:to-cyan-500 hover:to-95% hover:bg-clip-text hover:text-transparent"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-xl text-white transition-all hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600 hover:to-cyan-500 hover:to-95% hover:bg-clip-text hover:text-transparent">
        About
      </Link>
      <Link
        href="/contact"
        className="text-xl text-white transition-all hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600 hover:to-cyan-500 hover:to-95% hover:bg-clip-text hover:text-transparent">
        Contact
      </Link>
    </nav>
  );
}
