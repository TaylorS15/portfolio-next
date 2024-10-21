import '@/app/globals.css';
import Favicon from '@/assets/favicon.png';
import AnimatedBG from '@/components/AnimatedBG';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Taylor Svec',
  description: 'My Portfolio',
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black">
        <AnimatedBG />
        <Navigation />
        <div className='mx-[10vw] lg:mx-[20vw]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
