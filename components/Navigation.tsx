'use client';

import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/assets/menu.svg';
import Exit from '@/assets/exit.svg';
import { useEffect, useState } from 'react';

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.addEventListener('resize', () => {
			if (window.innerWidth > 768) setIsMenuOpen(true);
		});
		document.addEventListener('scroll', () => {
			setIsMenuOpen(false);
		});

		return () => {
			document.removeEventListener('resize', () => {
				if (window.innerWidth > 768) setIsMenuOpen(true);
			});
			document.removeEventListener('scroll', () => {
				setIsMenuOpen(false);
			});
		};
	}, []);

	return (
		<nav className="fixed top-0 z-20 h-14 w-full border-b border-slate-500 px-[10vw] backdrop-blur-md md:px-[20vw] lg:px-[23vw] xl:px-[27vw]">
			<div className="flex justify-between">
				<p className="mt-3 h-12 w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-2xl font-bold text-transparent"></p>
				<div className="relative my-auto h-6 w-6 md:hidden">
					<Image
						src={Menu}
						alt="menu"
						className={`absolute h-6 w-6 cursor-pointer transition-all ${
							isMenuOpen ? 'opacity-0' : 'opacity-100'
						}`}
						onClick={() => setIsMenuOpen(true)}
					/>
					<Image
						src={Exit}
						alt="exit"
						className={`absolute h-6 w-6 cursor-pointer transition-all ${
							isMenuOpen ? 'visible' : 'hidden'
						}`}
						onClick={() => setIsMenuOpen(false)}
					/>
				</div>
			</div>
			<div
				className={`absolute right-0 top-14 flex h-64 w-56 flex-col gap-4 border border-slate-700 bg-zinc-950 pl-4 transition-all md:right-[20vw] md:top-0 md:h-14 md:w-min md:translate-x-0 md:flex-row md:gap-8 md:border-b md:border-none md:bg-transparent md:pl-0 lg:right-[23vw] xl:right-[27vw] ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<Link
					href="/"
					className="mt-4 text-xl text-white transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent md:my-auto"
					onClick={() => window.scrollTo(0, 0)}>
					Home
				</Link>
				<Link
					href="/about"
					className="text-xl text-white transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent md:my-auto">
					About
				</Link>
				<Link
					href="/contact"
					className="text-xl text-white transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent md:my-auto">
					Contact
				</Link>
			</div>
		</nav>
	);
}
