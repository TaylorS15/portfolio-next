import Navigation from './components/Navigation';
import CursorFollower from './components/CursorFollower';
import AnimatedBG from './components/AnimatedBG';
import Clinko from './assets/clinko-game.png';
import AIKrpan from './assets/aikrpan.png';
import DocsGPT from './assets/docsgpt.png';
import EmailTool from './assets/emailtool.png';
import GTOtoGPT from './assets/gtotogpt.png';
import FrameWorked from './assets/frameworked.webp';
import ContactForm from './components/ContactForm';
import Link from 'next/link';
import Footer from './components/Footer';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { RepositoryCard } from './components/RepositoryCard';

export default function App() {
	return (
		<div className="flex flex-col gap-64">
			<Navigation />
			<CursorFollower />
			<AnimatedBG />

			<div className="z-10 mx-[10vw] mt-48 flex flex-col gap-4 md:mx-[20vw] md:mt-64 lg:mx-[23vw] xl:mx-[27vw]">
				<p className="text-3xl text-white">Hello, I&apos;m</p>
				<p className="w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-6xl font-bold text-transparent">
					Taylor Svec
				</p>
				<div className="flex gap-2">
					<p className="text-3xl font-bold text-white">A Web Developer</p>
					<p className="animate-hand-wave text-3xl">👋</p>
				</div>

				<div className="mt-12 flex gap-4">
					<Link
						className="h-9 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-1 font-medium text-white backdrop-blur-md transition-all hover:from-blue-700 hover:to-cyan-600 hover:text-white"
						href="/contact">
						Connect
					</Link>
					<Link
						className="h-9 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-1 font-medium text-white backdrop-blur-md transition-all hover:from-blue-700 hover:to-cyan-600 hover:text-white"
						href="/about">
						More About Me
					</Link>
				</div>
			</div>

			<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
				<h1 className="w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-4xl font-bold text-transparent">
					Skills and Tools
				</h1>

				<div className="flex w-full flex-wrap gap-2">
					<SkillCard
						title="React"
						icon="https://cdn.worldvectorlogo.com/logos/react-2.svg"
					/>
					<SkillCard
						title="TypeScript"
						icon="https://cdn.worldvectorlogo.com/logos/typescript.svg"
					/>
					<SkillCard
						title="Express.js"
						icon="https://cdn.worldvectorlogo.com/logos/express-109.svg"
					/>
					<SkillCard
						title="MongoDB"
						icon="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
					/>
					<SkillCard
						title="Next.js"
						icon="https://cdn.worldvectorlogo.com/logos/next-js.svg"
					/>
					<SkillCard
						title="JavaScript"
						icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
					/>
					<SkillCard
						title="TailwindCSS"
						icon="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
					/>
					{/* <SkillCard
						title="Redux"
						icon="https://cdn.worldvectorlogo.com/logos/redux.svg"
					/>
					<SkillCard
						title="Github"
						icon="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
					/> */}
				</div>
			</div>

			<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
				<h1 className="mb-4 w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-4xl font-bold text-transparent">
					Projects
				</h1>

				<div className="flex flex-wrap gap-8 md:mx-auto md:gap-2">
					<ProjectCard
						title="FrameWorked"
						description="Open source project that gives users a free platform to solve frontend framework interview style challenges. Currently only meant to be run locally."
						image={FrameWorked}
						link="https://github.com/TaylorS15/frameworked"
						images={[
							'https://cdn.worldvectorlogo.com/logos/next-js.svg',
							'https://cdn.worldvectorlogo.com/logos/typescript.svg',
							'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
							'https://cdn.worldvectorlogo.com/logos/express-109.svg',
						]}
					/>
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
							'https://cdn.worldvectorlogo.com/logos/next-js.svg',
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
							'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
							'https://trpc.io/img/logo.svg',
							'https://cdn.worldvectorlogo.com/logos/next-js.svg',
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
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
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
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
						]}
					/>
				</div>
			</div>

			<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
				<h1 className="mb-4 w-max bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-4xl font-bold text-transparent">
					Public Repositories
				</h1>

				<div className="flex flex-wrap gap-8">
					<RepositoryCard
						title="DocsGPT"
						description="An open source project that uses GPT to generate responses to questions about any projects documentation on GitHub."
						github="https://www.github.com/arc53/DocsGPT"
						images={[
							'https://cdn.worldvectorlogo.com/logos/react-2.svg',
							'https://cdn.worldvectorlogo.com/logos/typescript.svg',
							'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
							'https://cdn.worldvectorlogo.com/logos/redux.svg',
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
						]}
					/>
					<RepositoryCard
						title="Email & Client Manager"
						description="Built to help businesses manage their clients and send automated email promotions to their entire email list with the click of a button."
						github="https://github.com/TaylorS15/email-tool"
						images={[
							'https://cdn.worldvectorlogo.com/logos/react-2.svg',
							'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
							'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
						]}
					/>
					<RepositoryCard
						title="AI Face Detector"
						description="A single page app that uses the Clarifai API to detect an unlimited number of faces in an image and dispays a box around them and total number of faces in each image. Improved greatly from the original course project and features unique styling and app structure."
						github="https://github.com/TaylorS15/facedetection"
						images={[
							'https://cdn.worldvectorlogo.com/logos/react-2.svg',
							'https://cdn.worldvectorlogo.com/logos/typescript.svg',
							'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
							'https://cdn.worldvectorlogo.com/logos/redux.svg',
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
						]}
					/>
					<RepositoryCard
						title="Portfolio"
						description="This portfolios source code 😁. Built with NextJS, TailwindCSS, and TypeScript."
						github="https://www.github.com/TaylorS15/portfolio-next"
						images={[
							'https://cdn.worldvectorlogo.com/logos/next-js.svg',
							'https://cdn.worldvectorlogo.com/logos/typescript.svg',
							'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
							'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
						]}
					/>
				</div>
			</div>

			<ContactForm />
			<Footer />
		</div>
	);
}
