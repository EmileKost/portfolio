import Image from "next/image";
import { motion } from "framer-motion";

// TODO: Change IMG from hardcoded to CMS data and TYPES!!!
export const MovingImage = ({ x, y }: { x: number; y: number }) => {
	return (
		<motion.figure
			animate={{
				left: x,
				top: y,
				opacity: x && y ? 1 : 0,
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
