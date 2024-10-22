import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex h-14 w-full items-center justify-center gap-8 border-b border-white/50 backdrop-blur-md md:gap-12">
      <Link
        href="/"
        className="text-xl text-white transition-all hover:text-cyan-500"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-xl text-white transition-all hover:text-cyan-500">
        About
      </Link>
      <Link
        href="/contact"
        className="text-xl text-white transition-all hover:text-cyan-500">
        Contact
      </Link>
    </nav>
  );
}
