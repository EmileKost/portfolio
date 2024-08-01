import { twMerge } from "tailwind-merge";

import { MovingImage } from "./MovingImage";

const heroText = ["Hi there,", "I love to", "develop", "websites"];

export const HomeHero = () => {
	return (
		<div className="w-full relative h-screen flex items-start md:items-center">
			<h1 className="flex flex-col gap-2 md:gap-6 mt-[150px] md:mt-0">
				{heroText &&
					heroText.map((text: string, idx: number) => (
						<span
							key={text}
							className={twMerge(
								"text-blue-primary block text-5xl sm:text-[60px] md:text-[90px] lg:text-[140px] font-normal font-primary uppercase",
								idx % 2 != 0 ? "ml-8 md:ml-[95px]" : "ml-0"
							)}>
							{text}
						</span>
					))}
			</h1>
			<MovingImage />
		</div>
	);
};
