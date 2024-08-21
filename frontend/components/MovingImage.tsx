import Image from "next/image";
import { motion } from "framer-motion";

export const MovingImage = ({
	x,
	y,
	opacity,
}: {
	x: number;
	y: number;
	opacity: number;
}) => {
	return (
		<motion.figure
			animate={{
				left: x,
				top: y,
				opacity: opacity,
			}}
			transition={{
				ease: "easeOut",
				duration: 0.8,
			}}
			className="absolute z-[-1] opacity-0 w-[260px] h-[346px] sm:w-[300px] sm:h-[400px] md:w-[346px] md:h-[461px] lg:w-[490px] lg:h-[653px]">
			<Image
				src={"/images/me.png"}
				alt="Picture of me"
				width={490}
				height={653}
				className=""
			/>
			<figcaption className="text-base md:text-2xl text-blue-primary uppercase w-full text-end">
				PS, Yes I am a nerd
			</figcaption>
		</motion.figure>
	);
};
