import Image from "next/image";
import { motion } from "framer-motion";

const movingImageVariants = {
	initial: {
		opacity: 0,
		scale: 0,
		y: "50%",
	},
	animate: {
		opacity: 1,
		scale: 1,
		y: "50%",
	},
};

// TODO: Change IMG from hardcoded to CMS data and TYPES!!!
export const MovingImage = ({ refMouse }: { refMouse?: any }) => {
	return (
		<motion.figure
			variants={movingImageVariants}
			initial={"initial"}
			animate={"animate"}
			className="absolute right-2 md:right-6 z-[-10] translate-y-0 md:bottom-1/2 md:translate-y-1/2">
			<Image
				src={"/images/me.png"}
				alt="Picture of me"
				width={490}
				height={653}
				className="w-[260px] h-[346px] sm:w-[300px] sm:h-[400px] md:w-[346px] md:h-[461px] lg:w-[490px] lg:h-[653px]"
			/>
			<figcaption className="text-base md:text-2xl text-blue-primary uppercase w-full text-end">
				PS, Yes I am a nerd
			</figcaption>
		</motion.figure>
	);
};

// TODO:
// - Mouse postion together with skew should give a globe like effect that follows the cursor slightly and 3d-rotates (skew) based on mouse postion
