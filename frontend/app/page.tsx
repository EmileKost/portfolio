import { TheHeader } from "@/components/header/TheHeader";
import { HomeHero } from "@/components/HomeHero";
import { About } from "@/components/About";

import { useInView } from "framer-motion";

export default function Page() {
	return (
		<>
			<TheHeader />
			<main className="w-full">
				<HomeHero />
				<About />
			</main>
		</>
	);
}
