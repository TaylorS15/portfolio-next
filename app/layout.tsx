import './globals.css';
import Favicon from './assets/favicon.png';
import Head from 'next/head';

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
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<body>{children}</body>
		</html>
	);
}
