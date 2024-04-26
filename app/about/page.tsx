import AnimatedBG from '@/components/AnimatedBG';
import ContactForm from '@/components/ContactForm';
import CursorFollower from '@/components/CursorFollower';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Profile from '@/assets/profile.png';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
	return (
		<div className="flex flex-col gap-64">
			<Navigation />
			<AnimatedBG />
			<CursorFollower />
			<div className="z-10 mx-[10vw] mt-48 flex flex-col gap-8 md:mx-[20vw] md:mt-64 lg:mx-[23vw] xl:mx-[27vw]">
				<Image
					src={Profile}
					alt="Profile"
					className="w-48 rounded-full border-2 border-slate-800"
				/>
				<p className="text-2xl text-white md:w-3/4 lg:max-w-3xl">
					My name is{' '}
					<span className="w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-2xl font-bold text-transparent">
						Taylor Svec
					</span>{' '}
					and I am a web developer from Cleveland, Ohio. I originially started
					learning web development in 2020 to make a website for the landscaping
					company I was working for. I had always been interested in getting
					into coding and this was a great way to get started.
				</p>
				<p className="text-2xl text-white md:w-3/4 lg:max-w-3xl">
					Fast forward to today I am working on open source projects, looking
					for businesses to work with on updating and creating web presences and
					applications, and learning as many new technologies as I can with
					personal projects.
				</p>
				<p className="text-2xl text-white md:w-3/4 lg:max-w-3xl">
					Please feel free to reach out with any opportunities and check out my
					blog at{' '}
					<Link
						href="https://medium.com/@taylorsvec978"
						className="font-mono hover:underline">
						medium.com
					</Link>
					!
				</p>
			</div>

			<ContactForm />
			<Footer />
		</div>
	);
}
