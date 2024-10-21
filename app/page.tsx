import ContactForm from '@/components/ContactForm';
import SkillsAndTools from '@/components/SkillsAndTools';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import PublicRepositories from '@/components/PublicRepositories';

export default function App() {
  return (
    <div className="my-40 flex flex-col gap-52">
      <Hero />
      <Projects />
      <SkillsAndTools />
      <PublicRepositories />
      <ContactForm />
    </div>
  );
}
