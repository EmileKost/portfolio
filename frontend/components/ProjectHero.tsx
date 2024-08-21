"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const ProjectHero = () => {
	const router = useRouter();

	return (
		<div className="h-screen w-full px-2 md:px-6 pt-18 md:pt-36 relative">
			<button
				className="absolute top-12 left-2 md:left-6 cursor-pointer text-blue-primary"
				onClick={() => router.back()}>
				BACK
			</button>
			<motion.div className="w-full height-[680px]">
				<img
					src="/images/detail-hero-placeholder.png"
					alt=""
					className="w-full object-cover"
				/>
			</motion.div>
		</div>
	);
};
