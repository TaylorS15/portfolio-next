import { RepositoryCard } from '@/components/RepositoryCard';
import Github from '@/app/assets/github.svg';
import NextJSSvg from '@/app/assets/nextjs.svg';

export default function PublicRepositories() {
	return (
		<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
			<h1 className="mb-4 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text pb-3 text-5xl font-bold text-transparent">
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
						Github,
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
						Github,
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
						Github,
					]}
				/>
				<RepositoryCard
					title="Portfolio"
					description="This portfolios source code 😁. Built with NextJS, TailwindCSS, and TypeScript."
					github="https://www.github.com/TaylorS15/portfolio-next"
					images={[
						NextJSSvg,
						'https://cdn.worldvectorlogo.com/logos/typescript.svg',
						'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
						Github,
					]}
				/>
			</div>
		</div>
	);
}
