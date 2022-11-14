import "./globals.css";
import localFont from "@next/font/local";
import clsx from "clsx";

const soehneBuch = localFont({
	src: "./(fonts)/soehne-web-buch.woff2",
	variable: "--font-soehne-buch",
});
const soehneBuchKursiv = localFont({
	src: "./(fonts)/soehne-web-buch-kursiv.woff2",
	variable: "--font-soehne-buch-kursiv",
});
const soehneFett = localFont({
	src: "./(fonts)/soehne-web-fett.woff2",
	variable: "--font-soehne-fett",
});
const soehneHalbfett = localFont({
	src: "./(fonts)/soehne-web-halbfett.woff2",
	variable: "--font-soehne-halbfett",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${soehneBuch.variable} ${soehneBuchKursiv.variable} ${soehneFett.variable} ${soehneHalbfett.variable}`}
		>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="font-soehneBuch">{children}</body>
		</html>
	);
}
