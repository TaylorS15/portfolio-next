import OutLink from '@/assets/link.svg';
import Github from '@/assets/github.svg';
import Image, { StaticImageData } from 'next/image';
import NextJSSvg from '@/assets/nextjs.svg';
import GTOtoGPT from '@/assets/gtotogpt.png';
import AIKrpan from '@/assets/aikrpan.png';
import Clinko from '@/assets/clinko-game.png';
import EmailTool from '@/assets/emailtool.png';
import DocsGPT from '@/assets/docsgpt.png';

export default function Projects() {
	return (
		<div className="z-10 mx-[10vw] ">
			<h1 className="mb-4 w-max bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text pb-3 text-5xl font-bold text-transparent">
				Projects
			</h1>

			<div className="flex flex-wrap gap-8 md:mx-auto md:gap-6">
				<ProjectCard
					title="GTOtoGPT"
					description="We utilize OpenAI's advanced toolset, vast poker solver datasets, and sophisticated text embeddings to deliver precise and rapid insights for No Limit Hold'em queries by intelligently sourcing relevant information."
					image={GTOtoGPT}
					link="https://gtotogpt.com"
					images={[
						'https://cdn.worldvectorlogo.com/logos/typescript.svg',
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
						'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
						'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
						NextJSSvg,
						'https://cdn.worldvectorlogo.com/logos/express-109.svg',
					]}
				/>
				<ProjectCard
					title="AIKrpan"
					description="A GPT integration app used by law firms to analyze and summarize legal documents."
					image={AIKrpan}
					link="https://aikrpan.com"
					images={[
						'https://cdn.worldvectorlogo.com/logos/react-2.svg',
						'https://cdn.worldvectorlogo.com/logos/typescript.svg',
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
						'https://cdn.worldvectorlogo.com/logos/redux.svg',
					]}
				/>
				<ProjectCard
					title="Clinko"
					description="A web game where you build up points to purchase buildings and upgrades. It has an autosave feature that saves progress to a MySQL Database, automatically interacts with the game when you purchase buildings and upgrades, and uses NextAuth for quick and easy authentication."
					image={Clinko}
					link="https://clinko.io"
					github="https://github.com/TaylorS15/clinko-game"
					images={[
						'https://cdn.worldvectorlogo.com/logos/typescript.svg',
						'https://cdn.worldvectorlogo.com/logos/prisma-2.svg',
						'https://trpc.io/img/logo.svg',
						NextJSSvg,
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
					]}
				/>
				<ProjectCard
					title="Email & Client Manager"
					description="A web app that can be dropped into any React site to manage clients, their services, your email list, and has the ability to send promotional emails to your entire email list with the click of a button. Scroll down on the site to see more details about the application."
					image={EmailTool}
					link="https://github.com/TaylorS15/email-tool"
					github="https://github.com/TaylorS15/email-tool"
					images={[
						'https://cdn.worldvectorlogo.com/logos/react-2.svg',
						'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
						'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
						Github,
					]}
				/>
				<ProjectCard
					title="Major Contributor - DocsGPT"
					description="An open source project that uses GPT to generate responses to questions about any projects documentation on GitHub. I created the first version of the updated frontend naviation and app structure, started the move to Redux, pushed for TailwindCSS usage, and created the API functions to store data in local storage and fetch outside source documentation."
					image={DocsGPT}
					link="https://docsgpt.arc53.com/"
					github="https://github.com/arc53/DocsGPT"
					images={[
						'https://cdn.worldvectorlogo.com/logos/react-2.svg',
						'https://cdn.worldvectorlogo.com/logos/typescript.svg',
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
						'https://cdn.worldvectorlogo.com/logos/redux.svg',
						Github,
					]}
				/>
			</div>
		</div>
	);
}

export function ProjectCard({
	title,
	description,
	image,
	link,
	github,
	images,
}: {
	title: string;
	description: string;
	image: StaticImageData;
	link: string;
	github?: string;
	images: string[];
}) {
	return (
		<div className="w-full rounded-md backdrop-blur-md transition-all md:w-[45%]">
			<Image
				src={image.src}
				alt="title"
				width={500}
				height={300}
				className="h-auto w-full rounded-t-md"
			/>

			<div className="flex flex-col gap-3 p-3">
				<div className="flex justify-between">
					<a href={link} target="_blank" rel="noopener noreferrer">
						<p className="text-2xl font-bold text-white transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent ">
							{title}
						</p>
					</a>
					<div className="flex gap-2">
						<a href={link} target="_blank" rel="noopener noreferrer">
							<Image
								src={OutLink}
								alt="link"
								width={500}
								height={300}
								className="w-6 transition-all hover:w-7"
							/>
						</a>
						{github && (
							<a href={github} target="_blank" rel="noopener noreferrer">
								<Image
									src={Github}
									alt="github"
									width={500}
									height={300}
									className="w-6 transition-all hover:w-7"
								/>
							</a>
						)}
					</div>
				</div>
				<p className="text-xl text-gray-400">{description}</p>
				<div className="mt-auto flex">
					{images.map((image, index) => (
						<Image
							key={index}
							alt="title"
							src={image}
							width={500}
							height={300}
							className="mr-2 h-6 w-6"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
