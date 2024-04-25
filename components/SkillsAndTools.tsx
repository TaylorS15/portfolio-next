import { SkillCard } from '@/components/SkillCard';
import NodeJSSvg from '@/app/assets/nodejs.svg';
import NextJSSvg from '@/app/assets/nextjs.svg';

export default function SkillsAndTools() {
	return (
		<div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
			<h1 className="bg-gradient-to-r from-blue-700 to-sky-500 w-max bg-clip-text pb-3 text-5xl font-bold text-transparent">
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
				<SkillCard title="Node.js" icon={NodeJSSvg} />
				<SkillCard
					title="Golang"
					icon="https://cdn.worldvectorlogo.com/logos/golang-1.svg"
				/>
				<SkillCard
					title="MongoDB"
					icon="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
				/>
				<SkillCard title="Next.js" icon={NextJSSvg} />
				<SkillCard
					title="JavaScript"
					icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
				/>
				<SkillCard
					title="TailwindCSS"
					icon="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
				/>
			</div>
		</div>
	);
}
