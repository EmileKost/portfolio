import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IconPlus } from "../icons/Plus";

// TODO: Later change to payload BE data
const menuItems = ["About", "Skills", "Projects", "Contact"];

const containerVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const menuItemVariants = {
	initial: {
		opacity: 0,
		y: -5,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	hover: {
		color: "#0019FF",
	},
};

const circleVariant = {
	initial: {
		opacity: 0,
		y: -10,
	},
	hover: {
		opacity: 1,
		y: 0,
	},
};

export const Menu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="flex flex-col md:flex-row-reverse gap-8 items-center">
			<button
				className="group uppercase text-base md:text-xl flex items-center gap-2 text-blue-primary"
				onClick={() => setIsOpen(!isOpen)}>
				<span className="group-hover:rotate-45 transition-transform">
					<IconPlus />
				</span>
				Menu
			</button>
			<AnimatePresence>
				{menuItems && isOpen && (
					<motion.ul
						className="flex flex-col items-end md:flex-row-reverse gap-2 md:gap-7"
						variants={containerVariants}
						initial={"initial"}
						animate={"animate"}
						exit={"initial"}>
						{menuItems.map((item: string, idx: number) => (
							<motion.li
								key={idx}
								variants={menuItemVariants}
								className="font-primary hover:text-blue-primary transition-colors text-base md:text-xl relative">
								<a href="">{item}</a>
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};
