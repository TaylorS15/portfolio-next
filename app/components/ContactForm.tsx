'use client';
import Image from 'next/image';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Email from '../assets/email.svg';
import Github from '../assets/github.svg';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		from_name: '',
		from_email: '',
		message: '',
	});

	const [formStatus, setFormStatus] = useState<'SUCCESS' | 'ERROR' | 'WAITING'>('WAITING');

	function submitContactForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		emailjs.send('service_18kut6i', 'template_2591zf9', formData, 'JRIASRf_UAV7BhpQz').then(
			(result) => {
				setFormStatus('SUCCESS');
				setFormData({ from_name: '', from_email: '', message: '' });
				setTimeout(() => {
					setFormStatus('WAITING');
				}, 5000);
			},
			(error) => {
				setFormStatus('ERROR');
				setTimeout(() => {
					setFormStatus('WAITING');
				}, 5000);
				console.log(error.text);
			}
		);
	}

	return (
		<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
			<h1 className="w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-4xl font-bold text-transparent">
				Get In Touch!
			</h1>
			<p className="text-xl text-white">
				Whether it&apos;s a potential job opportunity or a funny meme, send me an email!
			</p>
			<div className="my-4">
				<div className="flex gap-4">
					<Image src={Email} alt="Email" className="h-8 w-8" />
					<p className="text-lg text-white">tsvec15@yahoo.com</p>
				</div>
				<div className="flex gap-4">
					<Image src={Github} alt="Github" className="h-8 w-8" />
					<a
						href="https://www.github.com/TaylorS15"
						className="text-lg text-white hover:underline"
						target="_blank"
						rel="noopener noreferrer">
						https://www.github.com/TaylorS15
					</a>
				</div>
			</div>

			<form className="flex flex-col gap-4 text-white" onSubmit={submitContactForm}>
				<input
					type="text"
					placeholder="Name"
					value={formData.from_name}
					onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
					required
					maxLength={100}
					className="w-full max-w-sm rounded-md border-b-2 border-slate-600 bg-gray-800 p-2 focus:outline-none"
				/>
				<input
					type="email"
					placeholder="Email"
					value={formData.from_email}
					onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
					required
					maxLength={100}
					className="w-full max-w-sm rounded-md border-b-2 border-slate-600 bg-gray-800 p-2 focus:outline-none"
				/>
				<textarea
					placeholder="Message"
					maxLength={500}
					value={formData.message}
					onChange={(e) => setFormData({ ...formData, message: e.target.value })}
					required
					className="h-32 max-h-64 w-full max-w-sm rounded-md border-b-2 border-slate-600 bg-gray-800 p-2 focus:outline-none"
				/>
				<div className="flex gap-4">
					<button
						type="submit"
						className="h-10 w-32 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 font-medium text-white backdrop-blur-md transition-all hover:from-blue-700 hover:to-cyan-600 hover:text-white">
						Send
					</button>

					{formStatus === 'SUCCESS' && (
						<div className="h-10 w-32 rounded-md border-2 border-dark-green bg-gradient-to-r from-green-500 to-green-700 px-3 font-medium text-white">
							<p className="mt-1 text-center">Success!</p>
						</div>
					)}

					{formStatus === 'ERROR' && (
						<div className="h-10 rounded-md border-2 border-dark-green bg-gradient-to-r from-red-500 to-red-700 px-3 font-medium text-white">
							<p className="mt-1 text-center">Oops! There was an error.</p>
						</div>
					)}
				</div>
			</form>
		</div>
	);
}
