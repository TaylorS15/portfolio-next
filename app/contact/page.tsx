import AnimatedBG from '@/components/AnimatedBG';
import ContactForm from '@/components/ContactForm';
import CursorFollower from '@/components/CursorFollower';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Contact() {
	return (
		<div className="flex flex-col">
			<Navigation />
			<AnimatedBG />
			<CursorFollower />
			<div className="z-30 my-[14.3%]">
				<ContactForm />
			</div>

			<Footer />
		</div>
	);
}
