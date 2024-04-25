import Navigation from '@/components/Navigation';
import CursorFollower from '@/components/CursorFollower';
import AnimatedBG from '@/components/AnimatedBG';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SkillsAndTools from '@/components/SkillsAndTools';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import PublicRepositories from '@/components/PublicRepositories';

export default function App() {
	return (
		<div className="flex flex-col gap-64">
			<Navigation />
			<CursorFollower />
			<AnimatedBG />
			<Hero />
			<SkillsAndTools />
			<Projects />
			<PublicRepositories />
			<ContactForm />
			<Footer />
		</div>
	);
}
