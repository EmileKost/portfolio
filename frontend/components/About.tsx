import { twMerge } from "tailwind-merge";

const textItems = [
	"I have been",
	"growing and",
	"working for 4 years",
	"on different",
];
export const About = () => {
	return (
		<div className="h-screen w-full bg-blue-primary px-2 md:px-6 flex flex-col justify-end md:justify-start">
			{textItems && (
				<div className="mb-[120px] md:mb-0 md:mt-[250px]">
					<h2 className="mt-0 flex flex-col gap-2 md:gap-4 uppercase mb-2 md:mb-4">
						{textItems.map((item: string, idx: number) => (
							<span
								className={twMerge(
									"block font-primary font-normal text-white-primary text-3xl sm:text-4xl md:text-5xl lg:text-[80px]",
									idx % 2 != 0 ? "ml-[48px] md:ml-[120px]" : "ml-0"
								)}
								key={item}>
								{item}
							</span>
						))}
					</h2>
					<button className="font-primary font-normal text-white-primary text-3xl sm:text-4xl md:text-5xl lg:text-[80px] uppercase">
						projects
					</button>
				</div>
			)}
		</div>
	);
};
