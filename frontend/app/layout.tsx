import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Emile Kost portfolio website",
};

const n27 = localFont({
	src: [
		{
			path: "../public/fonts/n27/n27-bold-webfont.ttf",
			weight: "700",
		},
		{
			path: "../public/fonts/n27/n27-medium-webfont.ttf",
			weight: "500",
		},
		{
			path: "../public/fonts/n27/n27-regular-webfont.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/n27/n27-light-webfont.ttf",
			weight: "300",
		},
	],
	variable: "--font-n27",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${n27.variable}`}>{children}</body>
		</html>
	);
}

// home
// /projects/title
// /contact

// px-2 md:px-4 for container
