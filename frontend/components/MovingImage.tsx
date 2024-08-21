import Image from "next/image";
import { motion } from "framer-motion";

import { getWindowSizes } from "@/src/utils/getWindowSizes";

type MovingImageProps = {
	x: number;
	y: number;
};

// TODO: Change IMG from hardcoded to CMS data and TYPES!!!
export const MovingImage = ({ x, y }: MovingImageProps) => {
	return (
		<motion.figure
			animate={{
				left: x,
				top: y,
			}}
			className="absolute right-2 md:right-6 z-[-10] translate-y-0 md:bottom-1/2 md:translate-y-1/2 w-[260px] h-[346px] sm:w-[300px] sm:h-[400px] md:w-[346px] md:h-[461px] lg:w-[490px] lg:h-[653px]">
			<Image
				src={"/images/me.png"}
				alt="Picture of me"
				width={490}
				height={653}
			/>
			<figcaption className="text-base md:text-2xl text-blue-primary uppercase w-full text-end">
				PS, Yes I am a nerd
			</figcaption>
		</motion.figure>
	);
};

// TODO:
// - Mouse postion together with skew should give a globe like effect that follows the cursor slightly and 3d-rotates (skew) based on mouse postion
