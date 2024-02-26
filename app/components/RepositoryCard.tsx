import Image from 'next/image';

export function RepositoryCard({
	title,
	description,
	github,
	images,
}: {
	title: string;
	description: string;
	github: string;
	images: string[];
}) {
	return (
		<div className="w-full rounded-md border-2 border-dark-green backdrop-blur-md transition-all">
			<div className="flex flex-col gap-3 p-3">
				<div className="flex justify-between">
					<a href={github} target="_blank" rel="noopener noreferrer">
						<p className="text-2xl font-bold text-white transition-all hover:w-max hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent ">
							{title}
						</p>
					</a>
				</div>
				<p className="text-lg text-white">{description}</p>
				<div className="flex">
					{images.map((image, index) => (
						<Image
							key={index}
							alt="tool logo"
							src={image}
							width={500}
							height={300}
							className="mr-2 h-5 w-5"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
