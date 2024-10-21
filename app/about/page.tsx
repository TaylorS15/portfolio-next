import ContactForm from '@/components/ContactForm';
import Profile from '@/assets/profile.png';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="my-40 flex flex-col gap-52">
      <div className="flex flex-col gap-8">
        <Image
          src={Profile}
          alt="Profile"
          className="w-48 rounded-full border"
        />
        <p className="text-2xl text-white md:w-3/4 lg:max-w-4xl">
          I&apos;m{' '}
          <span className="w-max bg-gradient-to-tr from-cyan-500 from-5% via-purple-600 to-cyan-500 to-95% bg-clip-text pb-3 text-2xl font-bold text-transparent">
            Taylor Svec
          </span>
          , a web developer from Cleveland, Ohio. My software development journey started in 2020 when I convinced my boss, at a landscaping company I had been working at, to hire me to create a new website for the company. It was a great first project and directly led me to learning the wide variety of skills I have today.
        </p>
        <p className="text-2xl text-white md:w-3/4 lg:max-w-4xl">
          Currently I am working on AI developer tools, open source projects, and looking for local businesses to parter with in creating and improving their web presences. With a strong passion for full stack development I am open to any opportunities that arise.
        </p>
        <p className="text-2xl text-white md:w-3/4 lg:max-w-4xl">
          Feel free to reach out with any opportunities and check out my
          blog at{' '}
          <Link
            href="https://medium.com/@taylorsvec978"
            className="font-mono hover:underline">
            medium.com
          </Link>
          !
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
