import Image from 'next/image';
import Github from '@/assets/github.svg';
import NextJSSvg from '@/assets/nextjs.svg';

export default function PublicRepositories() {
  return (
    <div>
      <h1 className="mb-4 w-max bg-gradient-to-tr from-cyan-500 from-5% via-purple-600 to-cyan-500 to-95% bg-clip-text pb-3 text-5xl font-bold text-transparent">
        Public Repositories
      </h1>

      <div className="flex flex-wrap gap-8">
        <RepositoryCard
          title="rivus-react"
          description="An open source, easy-to-implement, library for adding AI chat messaging to any React application."
          link="https://www.npmjs.com/package/rivus-react"
          images={[
            'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'https://cdn.worldvectorlogo.com/logos/typescript.svg',
          ]}
        />
        <RepositoryCard
          title="Images to PDF converter"
          description="An easy to use script to convert images of multiple formats to a single .pdf file. Created because the available tools online are poorly built and expensive."
          link="https://github.com/TaylorS15/pdf-converter"
          images={[
            'https://cdn.worldvectorlogo.com/logos/typescript.svg',
          ]}
        />
        <RepositoryCard
          title="DocsGPT"
          description="An open source project that uses GPT to generate responses to questions about any projects documentation on GitHub."
          link="https://www.github.com/arc53/DocsGPT"
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
          link="https://github.com/TaylorS15/email-tool"
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
          link="https://github.com/TaylorS15/facedetection"
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
          link="https://www.github.com/TaylorS15/portfolio-next"
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

function RepositoryCard({
  title,
  description,
  link,
  images,
}: {
  title: string;
  description: string;
  link: string;
  images: string[];
}) {
  return (
    <div className="w-full rounded-md backdrop-blur-md transition-all">
      <div className="flex flex-col gap-3 p-3">
        <a className='w-max' href={link} target="_blank" rel="noopener noreferrer">
          <p className="text-3xl font-bold text-white transition-all hover:bg-gradient-to-tr hover:from-cyan-500 hover:from-5% hover:via-purple-600 hover:to-cyan-500 hover:to-95% hover:bg-clip-text hover:text-transparent">
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
