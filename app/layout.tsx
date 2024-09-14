import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GitHub Repository Explorer",
	description: "Search and explore GitHub repositories with ease.",
	openGraph: {
		title: "GitHub Repository Explorer",
		description: "Discover and explore GitHub repositories effortlessly.",
		siteName: "GitHub Repository Explorer",
		locale: "en_US",
		type: "website",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
