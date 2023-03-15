import './globals.css';
import Favicon from './assets/favicon.png';

export const metadata = {
  title: 'Taylor Svec',
  description: 'My Portfolio',
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
