import Image from "next/image";
import { motion } from "framer-motion";

import { useBreakpointValue } from "@/src/hooks/useGetBreakpointValue";

export const MovingImage = ({
	x,
	y,
	skewX,
	skewY,
}: {
	x: number;
	y: number;
	skewX: number;
	skewY: number;
}) => {
	const windowWidth = useBreakpointValue();
	const mobileStyles = {
		bottom: 32,
		right: 6,
		opacity: 1,
	};

	return (
		<motion.figure
			animate={
				windowWidth >= 768
					? {
							left: x,
							top: y,
							skewY: skewY,
							skewX: skewX,
							opacity: 1,
					  }
					: mobileStyles
			}
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

// TODO: Check for better heights on responsive design
