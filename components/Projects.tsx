import { ProjectCard } from '@/components/ProjectCard';
import FrameWorked from '@/app/assets/frameworked.webp';
import NextJSSvg from '@/app/assets/nextjs.svg';
import GTOtoGPT from '@/app/assets/gtotogpt.png';
import AIKrpan from '@/app/assets/aikrpan.png';
import Clinko from '@/app/assets/clinko-game.png';
import EmailTool from '@/app/assets/emailtool.png';
import DocsGPT from '@/app/assets/docsgpt.png';
import Github from '@/app/assets/github.svg';

export default function Projects() {
	return (
		<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
			<h1 className="mb-4 bg-gradient-to-r from-blue-700 to-sky-500 w-max bg-clip-text pb-3 text-5xl font-bold text-transparent">
				Projects
			</h1>

			<div className="flex flex-wrap gap-8 md:mx-auto md:gap-6">
				<ProjectCard
					title="FrameWorked"
					description="Work in progress, and open source, project that gives users a free platform to solve frontend framework interview style challenges. Currently only meant to be run locally."
					image={FrameWorked}
					link="https://github.com/TaylorS15/frameworked"
					images={[
						NextJSSvg,
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
