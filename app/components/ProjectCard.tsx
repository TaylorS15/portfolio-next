import OutLink from '../assets/link.svg';
import Github from '../assets/github.svg';
import Image, { StaticImageData } from 'next/image';

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
		<div className="w-full rounded-md border-2 border-dark-green backdrop-blur-md transition-all md:w-[45%]">
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
				<p className="text-lg text-white">{description}</p>
				<div className="mt-auto flex">
					{images.map((image, index) => (
						<Image
							key={index}
							alt="title"
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
