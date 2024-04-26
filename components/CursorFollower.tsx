'use client';
import Image from 'next/image';
import CursorGradient from '@/assets/cursor-gradient.svg';
import { useEffect } from 'react';

export default function CursorFollower() {
	useEffect(() => {
		function cursorHandler(e: MouseEvent) {
			const x = e.clientX - 192;
			const y = e.clientY - 192 + window.scrollY;
			const cursor = document.querySelector('.cursor') as HTMLElement;
			cursor.style.transform = `translate(${x}px, ${y}px)`;
		}

		document.addEventListener('mousemove', cursorHandler);

		return () => document.removeEventListener('mousemove', cursorHandler);
	}, []);

	return (
		<Image
			src={CursorGradient}
			alt="cursor"
			className="cursor absolute inset-0 z-0 h-96 w-96 select-none opacity-20"
		/>
	);
}
