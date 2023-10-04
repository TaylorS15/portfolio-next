import Image from 'next/image';

export function SkillCard({ title, icon }: { title: string; icon: string }) {
	return (
		<div className="h-20 w-[48%] rounded-md border-2 border-dark-green backdrop-blur-md transition-all hover:bg-slate-600/50 md:w-64">
			<div className="my-auto flex h-full w-full gap-3">
				<Image
					src={icon}
					alt="tool logo"
					className="my-auto ml-4 w-8"
					width={500}
					height={300}
				/>
				<p className="my-auto h-max text-lg text-app-black-2">{title}</p>
			</div>
		</div>
	);
}
