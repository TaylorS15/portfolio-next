import Image from 'next/image';
import NodeJSSvg from '@/assets/nodejs.svg';
import NextJSSvg from '@/assets/nextjs.svg';

export default function SkillsAndTools() {
  return (
    <div>
      <h1 className="w-max bg-gradient-to-tr from-cyan-500 from-5% via-purple-600 to-cyan-500 to-95% bg-clip-text pb-3 text-5xl font-bold text-transparent">
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
        <SkillCard title="Node" icon={NodeJSSvg} />
        <SkillCard
          title="Golang"
          icon="https://cdn.worldvectorlogo.com/logos/golang-1.svg"
        />
        <SkillCard
          title="MongoDB"
          icon="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        />
        <SkillCard title="Next" icon={NextJSSvg} />
        <SkillCard
          title="JavaScript"
          icon="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        />
        <SkillCard
          title="TailwindCSS"
          icon="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
        />
        <SkillCard
          title="PostgreSQL"
          icon="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
        />
      </div>
    </div>
  );
}

function SkillCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="h-20 w-[48%] md:w-64">
      <div className="my-auto flex h-full w-full gap-3">
        <Image
          src={icon}
          alt="tool logo"
          className="my-auto ml-4 w-8"
          width={500}
          height={300}
        />
        <p className="my-auto h-max text-xl text-white">{title}</p>
      </div>
    </div>
  );
}

