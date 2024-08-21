import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Tag = ({ text, href }: { text: string; href?: string }) => (
	<li
		key={text}
		className={twMerge(
			"text-xs md:text-lg grow-0 py-0.5 uppercase h-fit rounded-full px-4 border border-blue-primary text-blue-primary hover:text-white-primary hover:bg-blue-primary transition-colors",
			href ? "cursor-pointer" : "cursor-default"
		)}>
		{href ? <Link href={href}>{text}</Link> : text}
	</li>
);
