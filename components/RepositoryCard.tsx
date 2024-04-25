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
		<div className="w-full rounded-md backdrop-blur-md transition-all">
			<div className="flex flex-col gap-3 p-3">
				<a href={github} target="_blank" rel="noopener noreferrer">
					<p className="text-3xl font-bold text-white transition-all hover:w-max hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-600 hover:bg-clip-text hover:text-transparent ">
						{title}
					</p>
				</a>
				<p className="-mt-1 mb-2 text-2xl text-gray-400">{description}</p>
				<div className="flex">
					{images.map((image, index) => (
						<Image
							key={index}
							alt="tool logo"
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
