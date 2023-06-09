import Navigation from './components/Navigation';
import CursorFollower from './components/CursorFollower';
import AnimatedBG from './components/AnimatedBG';
import OutLink from './assets/link.svg';
import Github from './assets/github.svg';
import NeoNext from './assets/neo-next.png';
import Clinko from './assets/clinko-game.png';
import QWD from './assets/qwd.png';
import DocsGPT from './assets/docsgpt.png';
import EmailTool from './assets/emailtool.png';
import Image, { StaticImageData } from 'next/image';
import ContactForm from './components/ContactForm';
import Link from 'next/link';
import Footer from './components/Footer';

function SkillCard({ title, icon }: { title: string; icon: string }) {
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

function ProjectCard({
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
  github: string;
  images: string[];
}) {
  return (
    <div className="w-full rounded-md border-2 border-dark-green backdrop-blur-md transition-all hover:bg-slate-600/50 md:w-[45%]">
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
            <p className="text-2xl font-bold text-app-black-2 transition-all hover:bg-gradient-to-r hover:from-app-blue hover:to-app-green hover:bg-clip-text hover:text-transparent ">
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
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Image
                src={Github}
                alt="github"
                width={500}
                height={300}
                className="w-6 transition-all hover:w-7"
              />
            </a>
          </div>
        </div>
        <p className="text-lg text-app-black-2">{description}</p>
        <div className="flex">
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

function RepositoryCard({
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
    <div className="w-full rounded-md border-2 border-dark-green backdrop-blur-md transition-all hover:bg-slate-600/50">
      <div className="flex flex-col gap-3 p-3">
        <div className="flex justify-between">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <p className="text-2xl font-bold text-app-black-2 transition-all hover:w-max hover:bg-gradient-to-r hover:from-app-blue hover:to-app-green hover:bg-clip-text hover:text-transparent ">
              {title}
            </p>
          </a>
        </div>
        <p className="text-lg text-app-black-2">{description}</p>
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

export default function App() {
  return (
    <div className="flex flex-col gap-64">
      <Navigation />

      <CursorFollower />

      <AnimatedBG />

      <div className="z-10 mx-[10vw] mt-48 flex flex-col gap-4 md:mx-[20vw] md:mt-64 lg:mx-[23vw] xl:mx-[27vw]">
        <p className="text-3xl text-app-black-2">Hello, I&apos;m</p>
        <p className="w-max bg-gradient-to-r from-app-blue to-app-green bg-clip-text pb-3 text-6xl font-bold text-transparent">
          Taylor Svec
        </p>
        <p className="text-3xl font-bold text-app-black-2">
          A Full Stack Web Developer 👋
        </p>
        <div className="mt-12 flex gap-4">
          <Link
            className="h-9 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-1 font-medium text-app-black-2 backdrop-blur-md transition-all hover:from-app-blue hover:to-app-green"
            href="/contact"
          >
            Connect
          </Link>
          <Link
            className="h-9 rounded-md border-2 border-dark-green bg-gradient-to-r px-3 pt-1 font-medium text-app-black-2 backdrop-blur-md transition-all hover:from-app-blue hover:to-app-green"
            href="/about"
          >
            More About Me
          </Link>
        </div>
      </div>

      <div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
        <h1 className="w-max bg-gradient-to-r from-app-blue to-app-green bg-clip-text pb-3 text-4xl font-bold text-transparent">
          Skills
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
            title="NodeJS"
            icon="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
          />
          <SkillCard
            title="Prisma"
            icon="https://cdn.worldvectorlogo.com/logos/prisma-2.svg"
          />
          <SkillCard
            title="MySQL"
            icon="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
          />
          <SkillCard title="NextAuth" icon="" />
          <SkillCard title="tRPC" icon="https://trpc.io/img/logo.svg" />
          <SkillCard
            title="Next.js"
            icon="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          />
          <SkillCard
            title="Firebase"
            icon="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
          />
          <SkillCard
            title="JavaScript"
            icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
          />
          <SkillCard
            title="TailwindCSS"
            icon="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
          />
          <SkillCard
            title="Redux"
            icon="https://cdn.worldvectorlogo.com/logos/redux.svg"
          />
          <SkillCard
            title="Git"
            icon="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
          />
          <SkillCard
            title="Github"
            icon="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
          />
        </div>
      </div>

      <div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
        <h1 className="mb-4 w-max bg-gradient-to-r from-app-blue to-app-green bg-clip-text pb-3 text-4xl font-bold text-transparent">
          Projects
        </h1>

        <div className="flex flex-wrap gap-8 md:mx-auto md:gap-2">
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
              '',
              'https://trpc.io/img/logo.svg',
              'https://cdn.worldvectorlogo.com/logos/next-js.svg',
              'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
              'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
            ]}
          />
          <ProjectCard
            title="Email & Client Manager"
            description="A web app that can be dropped into any React site to manage clients, their services, your email list, and has the ability to send promotional emails to your entire email list with the click of a button. Scroll down on the site to see more details about the application."
            image={EmailTool}
            link="https://quantumweb.dev/"
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
            title="QuantumWeb.dev"
            description="A business created to profesionallize my web development skills and help small-to-medium sized businesses with their web development needs."
            image={QWD}
            link="https://quantumweb.dev/"
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
            description="An open source project that uses GPT-3 to generate responses to questions about any projects documentation on GitHub. I created the first version of the updated frontend naviation and app structure, started the move to Redux, pushed for TailwindCSS usage, and created the API functions to store data in local storage and fetch outside source documentation."
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
          <ProjectCard
            title="neo-next.vercel.app"
            description="The first business site I created for a local landscaping company called NEO Landscape Mgmt. Originally created with raw HTML, CSS, and JavaScript. I later rewrote it to be built with NextJS to improve SEO and performance."
            image={NeoNext}
            link="https://neo-next.vercel.app/"
            github="https://github.com/TaylorS15"
            images={[
              'https://cdn.worldvectorlogo.com/logos/next-js.svg',
              'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
              'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
            ]}
          />
        </div>
      </div>

      <div className="z-10 mx-[10vw] md:mx-[20vw] lg:mx-[23vw] xl:mx-[27vw]">
        <h1 className="mb-4 w-max bg-gradient-to-r from-app-blue to-app-green bg-clip-text pb-3 text-4xl font-bold text-transparent">
          Public Repositories
        </h1>

        <div className="flex flex-wrap gap-8">
          <RepositoryCard
            title="DocsGPT"
            description="An open source project that uses GPT-3 to generate responses to questions about any projects documentation on GitHub."
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
            title="Advent of Code 2022"
            description="A repository containing my solutions to the Advent of Code 2022 challenges."
            github="https://github.com/TaylorS15/aoc-2022"
            images={[
              'https://cdn.worldvectorlogo.com/logos/typescript.svg',
              'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
              'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
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
            title="RoboFriends"
            description="A simple single page app that fetches placeholder data from an API and displays it in a card format. Includes a search bar and unique styling and app structure compared to the oringinal course project."
            github="https://github.com/TaylorS15/robofriends"
            images={[
              'https://cdn.worldvectorlogo.com/logos/react-2.svg',
              'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
              'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
            ]}
          />
          <RepositoryCard
            title="Portfolio"
            description="This portfolios source code 😁. Built with NextJS, TailwindCSS, and TypeScript."
            github="https://www.github.com/arc53/DocsGPT"
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
